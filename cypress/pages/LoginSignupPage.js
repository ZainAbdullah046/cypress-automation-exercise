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

    verifyLoginFormVisible() {
    cy.contains('Login to your account').should('be.visible')
    }

    enterLoginEmail(email) {
    cy.get('input[data-qa="login-email"]').type(email)
    }

    enterLoginPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password)
    }

    clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click()
    }

    verifyLoginErrorVisible() { 
    cy.contains('Your email or password is incorrect!').should('be.visible')
    }

    verifySignupErrorVisible() {
    cy.contains('Email Address already exist!').should('be.visible')
}
}

export default new LoginSignupPage()