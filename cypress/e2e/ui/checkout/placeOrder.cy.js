import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import CartPage from '../../../pages/CartPage'
import LoginSignupPage from '../../../pages/LoginSignupPage'
import AccountInfoPage from '../../../pages/AccountInfoPage'
import CheckoutPage from '../../../pages/CheckoutPage'

describe('Test Case 19: Place Order - Register while Checkout', () => {
  it('registers during checkout and places an order successfully', () => {
    cy.fixture('users').then((data) => {
      const user = data.checkoutUser
      const payment = data.cardDetails

      // Steps 1-3
      HomePage.visit()
      HomePage.verifyHomePageVisible()

      // Step 4
      HomePage.clickProducts()
        ProductsPage.addProductToCartByIndex(0)

// Step 5
    ProductsPage.clickViewCart()

      // Step 6
      CartPage.verifyCartPageVisible()

      // Step 7
      CheckoutPage.clickProceedToCheckout()

      // Step 8
      CheckoutPage.clickRegisterLoginInModal()
    


        LoginSignupPage.verifyNewUserSignupVisible()
      LoginSignupPage.enterNameAndEmail(user.name, user.email)
            LoginSignupPage.clickSignupButton()

            AccountInfoPage.verifyAccountInfoVisible()
            AccountInfoPage.fillAccountInfo(user)
            AccountInfoPage.selectNewsletterCheckbox()
            AccountInfoPage.selectSpecialOffersCheckbox()
            AccountInfoPage.fillAddressInfo(user)
            AccountInfoPage.clickCreateAccountButton()
      // Step 10
      AccountInfoPage.verifyAccountCreated()
      AccountInfoPage.clickContinueButton()

      // Step 11
      AccountInfoPage.verifyLoggedInAs(user.name)

      // Step 12
      HomePage.clickCart()

      // Step 13
      CheckoutPage.clickProceedToCheckout()

      // Step 14
      CheckoutPage.verifyDeliveryAddress(user)
      CheckoutPage.verifyBillingAddress(user) 
     
   

      // Step 15
      CheckoutPage.enterOrderComment('Please deliver in the morning.')
      CheckoutPage.clickPlaceOrder()

      // Step 16
      CheckoutPage.fillPaymentDetails(payment)

      // Step 17
      CheckoutPage.clickPayAndConfirmOrder()

      // Step 18
      CheckoutPage.verifyOrderSuccessMessage()

      // Step 19
      AccountInfoPage.clickDeleteAccountButton()

      // Step 20
      AccountInfoPage.verifyAccountDeleted()
    })
  })
})