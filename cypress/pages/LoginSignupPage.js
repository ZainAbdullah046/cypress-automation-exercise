class LoginSignupPage {
    verifyNewUserSignupVisible() {
        cy.contains('New User Signup!').should('be.visible')
    }

    enterNameAndEmail(name, email) {
        cy.get('input[data-qa="signup-name"]').type(name)
        cy.get('input[data-qa="signup-email"]').type(email)
    }

    clickSignupButton() {
        cy.get('button[data-qa="signup-button"]').click()
    }

}

export default new LoginSignupPage()