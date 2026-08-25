import HomePage from '../../../pages/HomePage'
import LoginSignupPage from '../../../pages/LoginSignupPage'
import AccountInfoPage from '../../../pages/AccountInfoPage'

describe('Test Case 4: Logout User', () => {
  it('logs out successfully and returns to login page', () => {
    cy.fixture('users').then((data) => {
      const user = data.existingUser

      // Steps 1-3
      HomePage.visit()
      HomePage.verifyHomePageVisible()

      // Step 4
      HomePage.clickSignupLogin()

      // Step 5
      LoginSignupPage.verifyLoginFormVisible()

      // Steps 6-7
      LoginSignupPage.enterLoginEmail(user.email)
      LoginSignupPage.enterLoginPassword(user.password)
      LoginSignupPage.clickLoginButton()

      // Step 8
      AccountInfoPage.verifyLoggedInAs(user.firstName)

      // Step 9
      HomePage.clickLogoutButton()

      // Step 10
      LoginSignupPage.verifyLoginFormVisible()
    })
  })
})