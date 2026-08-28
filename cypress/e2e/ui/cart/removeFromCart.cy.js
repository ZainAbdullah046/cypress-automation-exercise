import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import CartPage from '../../../pages/CartPage'

describe('Test Case 17: Remove Products From Cart', () => {
  it('removes a product from the cart', () => {
    HomePage.visit()
    HomePage.verifyHomePageVisible()

   
    HomePage.clickProducts()
    ProductsPage.addProductToCartByIndex(0)
    ProductsPage.clickContinueShopping()
    
    HomePage.clickCart()

    CartPage.verifyCartPageVisible()

    CartPage.removeProduct(1)

   
  })
})