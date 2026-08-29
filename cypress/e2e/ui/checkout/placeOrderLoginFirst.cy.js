import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import CartPage from '../../../pages/CartPage'
import LoginSignupPage from '../../../pages/LoginSignupPage'
import AccountInfoPage from '../../../pages/AccountInfoPage'
import CheckoutPage from '../../../pages/CheckoutPage'

describe('Test Case : Place Order - Login before Checkout', () => {
  it('logs in first, then places an order successfully', () => {
    cy.fixture('users').then((data) => {
      const user = data.checkoutUser
      const payment = data.cardDetails

      
      HomePage.visit()
      HomePage.verifyHomePageVisible()

      HomePage.clickSignupLogin()

      LoginSignupPage.enterLoginEmail(user.email)
      LoginSignupPage.enterLoginPassword(user.password)
      LoginSignupPage.clickLoginButton()

      AccountInfoPage.verifyLoggedInAs(user.name)

      HomePage.clickProducts()
      ProductsPage.addProductToCartByIndex(0)

      ProductsPage.clickViewCart()

      CartPage.verifyCartPageVisible()


      CheckoutPage.clickProceedToCheckout()

      CheckoutPage.verifyDeliveryAddress(user)
      CheckoutPage.verifyBillingAddress(user)
      CheckoutPage.verifyReviewOrderVisible()

      CheckoutPage.enterOrderComment('Please deliver in the evening.')
      CheckoutPage.clickPlaceOrder()

   
      CheckoutPage.fillPaymentDetails(payment)

      
      CheckoutPage.clickPayAndConfirmOrder()

      CheckoutPage.verifyOrderSuccessMessage()

      AccountInfoPage.clickDeleteAccountButton()

      AccountInfoPage.verifyAccountDeleted()
    })
  })
})