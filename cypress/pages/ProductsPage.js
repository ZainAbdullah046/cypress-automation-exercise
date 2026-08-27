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

   searchProduct(productName) {
    cy.get('#search_product').type(productName)
    cy.get('#submit_search').click()
  }

  verifySearchedProductsVisible() {
    cy.contains('Searched Products').should('be.visible')
  }
}

export default new ProductsPage()