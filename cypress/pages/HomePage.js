class HomePage {
    visit() {
        cy.visit('/')
    }

    verifyHomePageVisible() {
        cy.url().should('eq', Cypress.config('baseUrl') + '/')
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    }

    clickSignupLogin() {
        cy.contains('Signup / Login').click()
    }
}

export default new HomePage()