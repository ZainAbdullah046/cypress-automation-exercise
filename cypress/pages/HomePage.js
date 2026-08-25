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


    clickLogoutButton() {
        cy.contains('Logout').click()
  }

    clickContactUs() {
        cy.contains('Contact us').click()
  }

}

export default new HomePage()