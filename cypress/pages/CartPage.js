class CartPage {
  verifyProductInCart(productId) {
    cy.get(`#product-${productId}`).should('be.visible')
  }

  verifyProductPrice(productId, expectedPrice) {
    cy.get(`#product-${productId} .cart_price p`).should('contain.text', expectedPrice)
  }

  verifyProductQuantity(productId, expectedQuantity) {
    cy.get(`#product-${productId} .cart_quantity button`).should('contain.text', expectedQuantity)
  }

  verifyProductTotal(productId, expectedTotal) {
    cy.get(`#product-${productId} .cart_total .cart_total_price`).should('contain.text', expectedTotal)
  }
}

export default new CartPage()