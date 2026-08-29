class CheckoutPage {
  clickRegisterLoginInModal() {
      cy.visit('/login')
  }

  clickProceedToCheckout() {
    cy.contains('Proceed To Checkout').click()
  }

  verifyCheckoutInfoVisible() {
    cy.get('[data-qa="checkout-info"]').should('be.visible')
  }

verifyDeliveryAddress(user) {
  cy.get('#address_delivery').within(() => {
    cy.contains(user.firstName).should('be.visible')
    cy.contains(user.lastName).should('be.visible')
    cy.contains(user.address1).should('be.visible')
    cy.contains(user.city).should('be.visible')
    cy.contains(user.state).should('be.visible')
    cy.contains(user.country).should('be.visible')
    cy.contains(user.zipcode).should('be.visible')
    cy.contains(user.mobileNumber).should('be.visible')
  })
}

verifyBillingAddress(user) {
  cy.get('#address_invoice').within(() => {
    cy.contains(user.firstName).should('be.visible')
    cy.contains(user.lastName).should('be.visible')
    cy.contains(user.address1).should('be.visible')
    cy.contains(user.city).should('be.visible')
    cy.contains(user.state).should('be.visible')
    cy.contains(user.country).should('be.visible')
    cy.contains(user.zipcode).should('be.visible')
    cy.contains(user.mobileNumber).should('be.visible')
  })
}

  verifyReviewOrderVisible() {
    cy.get('#cart_info').should('be.visible')
  }

  enterOrderComment(comment) {
    cy.get('textarea[name="message"]').type(comment)
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click()
  }

  fillPaymentDetails(payment) {
    cy.get('[data-qa="name-on-card"]').type(payment.nameOnCard)
    cy.get('[data-qa="card-number"]').type(payment.cardNumber)
    cy.get('[data-qa="cvc"]').type(payment.cvc)
    cy.get('[data-qa="expiry-month"]').type(payment.expiryMonth)
    cy.get('[data-qa="expiry-year"]').type(payment.expiryYear)
  }

  clickPayAndConfirmOrder() {
    cy.get('[data-qa="pay-button"]').click()
  }

  verifyOrderSuccessMessage() {
    cy.get('[data-qa="order-placed"]').should('be.visible')
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  }
}

export default new CheckoutPage()