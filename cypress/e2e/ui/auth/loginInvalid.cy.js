import HomePage from '../../../pages/HomePage'
import LoginSignupPage from '../../../pages/LoginSignupPage'

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('shows an error for invalid login credentials', () => {
    cy.fixture('users').then((data) => {
      const user = data.invalidUser


      HomePage.visit()
      HomePage.verifyHomePageVisible()

   
      HomePage.clickSignupLogin()

  
      LoginSignupPage.verifyLoginFormVisible()

 
      LoginSignupPage.enterLoginEmail(user.email)
      LoginSignupPage.enterLoginPassword(user.password)
      LoginSignupPage.clickLoginButton()

      // Step 8
      LoginSignupPage.verifyLoginErrorVisible()
    })
  })
})