import HomePage from '../../../pages/HomePage'

describe('Test Case 10: Verify Subscription in home page', () => {
  it('subscribes successfully from the home page footer', () => {
    // Steps 1-3
    HomePage.visit()
    HomePage.verifyHomePageVisible()

    // Step 4
    HomePage.scrollToFooter()

    // Step 5
    HomePage.verifySubscriptionVisible()

    // Step 6
    HomePage.enterSubscriptionEmail('testsubscribe12345@example.com')
    HomePage.clickSubscribeButton()

    
    HomePage.verifySubscriptionSuccess()
  })
})