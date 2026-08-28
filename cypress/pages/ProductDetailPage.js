class ProductDetailPage {
  verifyProductDetailVisible() {
    cy.get('.product-information h2').should('be.visible')      // product name
    cy.get('.product-information p').first().should('be.visible') // category
    cy.get('.product-information span span').should('be.visible') // price
    cy.contains('Availability:').should('be.visible')
    cy.contains('Condition:').should('be.visible')
    cy.contains('Brand:').should('be.visible')
  }
  
  verifyWriteReviewVisible() {
  cy.contains('Write Your Review').should('be.visible')
}

fillReviewForm(name, email, review) {
  cy.get('#name').type(name)
  cy.get('#email').type(email)
  cy.get('#review').type(review)
}

clickSubmitReview() {
  cy.get('#button-review').click()
}

verifyReviewSuccessMessage() {
  cy.contains('Thank you for your review.').should('be.visible')
}
}

export default new ProductDetailPage()