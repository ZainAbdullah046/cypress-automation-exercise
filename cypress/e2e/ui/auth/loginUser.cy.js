import HomePage from '../../../pages/HomePage'
import LoginSignupPage from '../../../pages/LoginSignupPage'
import AccountInfoPage from '../../../pages/AccountInfoPage'

describe('Test Case 2: Login User with correct email and password', () => {
  it('logs in successfully and deletes the account', () => {
    cy.fixture('users').then((data) => {
      const user = data.existingUser


      HomePage.visit()
      HomePage.verifyHomePageVisible()

    
      HomePage.clickSignupLogin()
      LoginSignupPage.verifyLoginFormVisible()

      LoginSignupPage.enterLoginEmail(user.email)
      LoginSignupPage.enterLoginPassword(user.password)
      LoginSignupPage.clickLoginButton()

    
      AccountInfoPage.verifyLoggedInAs(user.firstName)
      AccountInfoPage.clickDeleteAccountButton()
      AccountInfoPage.verifyAccountDeleted()
    })
  })
})