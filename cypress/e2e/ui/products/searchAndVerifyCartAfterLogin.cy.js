import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import CartPage from '../../../pages/CartPage'
import LoginSignupPage from '../../../pages/LoginSignupPage'

describe('Test Case 20: Search Products and Verify Cart After Login', () => {
  it('adds searched products to cart and confirms they persist after login', () => {
    cy.fixture('users').then((data) => {
      const user = data.existingUser

      // Steps 1-4
      HomePage.visit()
      HomePage.clickProducts()
      ProductsPage.verifyAllProductsPageVisible()

      // Steps 5-7
      ProductsPage.searchProduct('Top')
      ProductsPage.verifySearchedProductsVisible()
      cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)

      // Step 8
      ProductsPage.addSearchedProductToCartByIndex(0)
      ProductsPage.clickContinueShopping()
      ProductsPage.addSearchedProductToCartByIndex(1)
      ProductsPage.clickViewCart()

      // Step 9
      let addedProductNames = []
      CartPage.getProductNames().then((names) => {
        addedProductNames = names
        expect(addedProductNames.length).to.eq(2)

        // Step 10
        HomePage.clickSignupLogin()
        LoginSignupPage.enterLoginEmail(user.email)
        LoginSignupPage.enterLoginPassword(user.password)
        LoginSignupPage.clickLoginButton()

        // Step 11
        HomePage.clickCart()

        // Step 12
        CartPage.verifyProductNamesInCart(addedProductNames)
      })
    })
  })
})