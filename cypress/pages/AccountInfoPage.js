class AccountInfoPage {
    verifyAccountInfoVisible() {
        cy.contains('Enter Account Information').should('be.visible')
    }
    fillAccountInfo(user) {
        cy.get(`input[value="${user.title}"]`).click()
        cy.get('input[data-qa="password"]').type(user.password)
        cy.get('select[data-qa="days"]').select(user.day)
        cy.get('select[data-qa="months"]').select(user.month)
        cy.get('select[data-qa="years"]').select(user.year)
    }
    selectNewsletterCheckbox() {
        cy.get('#newsletter').click()
    }
    selectSpecialOffersCheckbox() {
        cy.get('#optin').click()
    }
    fillAddressInfo(user) {
        cy.get('input[data-qa="first_name"]').type(user.firstName)
        cy.get('input[data-qa="last_name"]').type(user.lastName)
        cy.get('input[data-qa="company"]').type(user.company)
        cy.get('input[data-qa="address"]').type(user.address1)
        cy.get('input[data-qa="address2"]').type(user.address2)
        cy.get('select[data-qa="country"]').select(user.country)
        cy.get('input[data-qa="state"]').type(user.state)
        cy.get('input[data-qa="city"]').type(user.city)
        cy.get('input[data-qa="zipcode"]').type(user.zipcode)
        cy.get('input[data-qa="mobile_number"]').type(user.mobileNumber)
    }
    clickCreateAccountButton() {
        cy.get('button[data-qa="create-account"]').click()
    }
    verifyAccountCreated() {
        cy.get('h2[data-qa="account-created"]').should('be.visible')
    }
    clickContinueButton() {
        cy.get('a[data-qa="continue-button"]').click()
    }

    verifyLoggedInAs(name) {
        cy.contains(`Logged in as ${name}`).should('be.visible')
    }
    clickDeleteAccountButton() {
        cy.contains('Delete Account').click()
    }
    verifyAccountDeleted() {
        cy.get('h2[data-qa="account-deleted"]').should('be.visible')
    }
}
export default new AccountInfoPage()