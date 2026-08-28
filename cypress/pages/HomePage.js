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
    clickTestCases() {
        cy.contains('Test Cases').click()
}
    clickProducts() {
        cy.contains('Products').click()
}
     scrollToFooter() {
        cy.get('#footer').scrollIntoView()
  }

     verifySubscriptionVisible() {
        cy.contains('Subscription').should('be.visible')
  }

     enterSubscriptionEmail(email) {
        cy.get('#susbscribe_email').type(email)
  }

     clickSubscribeButton() {
        cy.get('#subscribe').click()
  }

     verifySubscriptionSuccess() {
        cy.contains('You have been successfully subscribed!').should('be.visible')
  }

}

export default new HomePage()