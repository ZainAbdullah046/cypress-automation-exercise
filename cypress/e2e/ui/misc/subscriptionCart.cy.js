// subscriptionCart test
import HomePage from '../../../pages/HomePage'

describe('Test Case 11: Verify Subscription in Cart page', () => {
  it('subscribes successfully from the Cart page footer', () => {
   
    HomePage.visit()
    HomePage.verifyHomePageVisible()

    HomePage.clickCart()

    HomePage.scrollToFooter()

    HomePage.verifySubscriptionVisible()

    HomePage.enterSubscriptionEmail('testsubscribecart12345@example.com')
    HomePage.clickSubscribeButton()

    HomePage.verifySubscriptionSuccess()
  })
})