import HomePage from '../../../pages/HomePage'
import LoginSignupPage from '../../../pages/LoginSignupPage'

describe('Test Case 5: Register User with existing email', () => {
  it('shows an error when signing up with an already registered email', () => {
    cy.fixture('users').then((data) => {
      const user = data.existingUser // must be a currently-registered, non-deleted account

      HomePage.visit()
      HomePage.verifyHomePageVisible()

      HomePage.clickSignupLogin()

      LoginSignupPage.verifyNewUserSignupVisible()

      LoginSignupPage.enterNameAndEmail(user.firstName, user.email)
      LoginSignupPage.clickSignupButton()

      LoginSignupPage.verifySignupErrorVisible()
      
    })
  })
})