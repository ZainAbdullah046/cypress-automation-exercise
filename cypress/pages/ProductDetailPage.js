class ProductDetailPage {
  verifyProductDetailVisible() {
    cy.get('.product-information h2').should('be.visible')      // product name
    cy.get('.product-information p').first().should('be.visible') // category
    cy.get('.product-information span span').should('be.visible') // price
    cy.contains('Availability:').should('be.visible')
    cy.contains('Condition:').should('be.visible')
    cy.contains('Brand:').should('be.visible')
  }
}

export default new ProductDetailPage()