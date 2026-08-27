class ProductsPage {
  verifyAllProductsPageVisible() {
    cy.contains('All Products').should('be.visible')
  }

  verifyProductsListVisible() {
    cy.get('.features_items').should('be.visible')
  }

   clickViewProductOfFirstProduct() {
    cy.get('.features_items .product-image-wrapper').first().within(() => {
      cy.contains('View Product').click({ force: true })
    })
  }
}

export default new ProductsPage()