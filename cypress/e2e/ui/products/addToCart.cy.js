import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import CartPage from '../../../pages/CartPage'

describe('Test Case 12: Add Products in Cart', () => {
  it('adds two products to the cart and verifies them', () => {
    
    HomePage.visit()
    HomePage.verifyHomePageVisible()

    HomePage.clickProducts()

    ProductsPage.addProductToCartByIndex(0) // first product

    ProductsPage.clickContinueShopping()

    ProductsPage.addProductToCartByIndex(1) // second product

    ProductsPage.clickViewCart()


    CartPage.verifyProductInCart(1)
    CartPage.verifyProductInCart(2)

    // verify BOTH products
    CartPage.verifyProductPrice(1, 'Rs. 500')
    CartPage.verifyProductQuantity(1, '1')
    CartPage.verifyProductTotal(1, 'Rs. 500')

    CartPage.verifyProductPrice(2, 'Rs. 400')
    CartPage.verifyProductQuantity(2, '1')
    CartPage.verifyProductTotal(2, 'Rs. 400')
  })
})