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

  addProductToCartByIndex(index) {
    cy.get('.features_items .product-image-wrapper').eq(index).within(() => {
    cy.contains('Add to cart').click({ force: true })
  })
}

 clickContinueShopping() {
  cy.contains('Continue Shopping').click({ force: true })
}

  clickViewCart() {
    cy.contains('View Cart').click()
}
verifyBrandsVisible() {
  cy.get('.brands_products').should('be.visible')
}

clickBrandByName(brandName) {
  cy.get('.brands-name').contains(brandName).click()
}

verifyBrandPageVisible(brandName) {
  cy.contains(`Brand - ${brandName} Products`).should('be.visible')
  cy.get('.features_items').should('be.visible')
}

}

export default new ProductsPage()