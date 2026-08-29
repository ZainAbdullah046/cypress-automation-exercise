import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import CartPage from '../../../pages/CartPage'
import LoginSignupPage from '../../../pages/LoginSignupPage'
import AccountInfoPage from '../../../pages/AccountInfoPage'
import CheckoutPage from '../../../pages/CheckoutPage'

describe('Test Case 16: Place Order - Login before Checkout', () => {
  it('logs in first, then places an order successfully', () => {
    cy.fixture('users').then((data) => {
      const user = data.checkoutUser
      const payment = data.cardDetails

      // Steps 1-3
      HomePage.visit()
      HomePage.verifyHomePageVisible()

      // Step 4
      HomePage.clickSignupLogin()

      // Step 5
      LoginSignupPage.enterLoginEmail(user.email)
      LoginSignupPage.enterLoginPassword(user.password)
      LoginSignupPage.clickLoginButton()

      // Step 6
      AccountInfoPage.verifyLoggedInAs(user.name)

      // Step 7
      HomePage.clickProducts()
      ProductsPage.addProductToCartByIndex(0)

      // Step 8
      ProductsPage.clickViewCart()

      // Step 9
      CartPage.verifyCartPageVisible()

      // Step 10
      CheckoutPage.clickProceedToCheckout()

      // Step 11
      CheckoutPage.verifyDeliveryAddress(user)
      CheckoutPage.verifyBillingAddress(user)
      CheckoutPage.verifyReviewOrderVisible()

      // Step 12
      CheckoutPage.enterOrderComment('Please deliver in the evening.')
      CheckoutPage.clickPlaceOrder()

      // Step 13
      CheckoutPage.fillPaymentDetails(payment)

      // Step 14
      CheckoutPage.clickPayAndConfirmOrder()

      // Step 15
      CheckoutPage.verifyOrderSuccessMessage()

      // Step 16
      AccountInfoPage.clickDeleteAccountButton()

      // Step 17
      AccountInfoPage.verifyAccountDeleted()
    })
  })
})