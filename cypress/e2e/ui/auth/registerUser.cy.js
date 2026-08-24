import HomePage from '../../../pages/HomePage'
import LoginSignupPage from '../../../pages/LoginSignupPage'
import AccountInfoPage from '../../../pages/AccountInfoPage'

describe('Test Case 1: Register User', () => {
    it('registers a new user successfully and deletes the account', () => {
        cy.fixture('users').then((data) => {
            const user = data.newUser

            HomePage.visit()
            HomePage.verifyHomePageVisible()
            HomePage.clickSignupLogin()

            LoginSignupPage.verifyNewUserSignupVisible()
            LoginSignupPage.enterNameAndEmail(user.name, user.email)
            LoginSignupPage.clickSignupButton()

            AccountInfoPage.verifyAccountInfoVisible()
            AccountInfoPage.fillAccountInfo(user)
            AccountInfoPage.selectNewsletterCheckbox()
            AccountInfoPage.selectSpecialOffersCheckbox()
            AccountInfoPage.fillAddressInfo(user)
            AccountInfoPage.clickCreateAccountButton()

            AccountInfoPage.verifyAccountCreated()
            AccountInfoPage.clickContinueButton()

            AccountInfoPage.verifyLoggedInAs(user.name)
            AccountInfoPage.clickDeleteAccountButton()
            AccountInfoPage.verifyAccountDeleted()
        })
    })
})