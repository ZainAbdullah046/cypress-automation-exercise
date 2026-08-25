// contactUs test
import HomePage from '../../../pages/HomePage'
import ContactUsPage from '../../../pages/ContactUsPage'

describe('Test Case 6: Contact Us Form', () => {
  it('submits the contact form successfully', () => {
    cy.fixture('users').then((data) => {
      const form = data.contactForm

      HomePage.visit()
      HomePage.verifyHomePageVisible()

      HomePage.clickContactUs()

      ContactUsPage.verifyGetInTouchVisible()

      ContactUsPage.fillContactForm(form)

      ContactUsPage.uploadFile('cypress/fixtures/sample-upload.txt')

      ContactUsPage.clickSubmit()

      ContactUsPage.verifySuccessMessage()

      ContactUsPage.clickHomeButton()
      HomePage.verifyHomePageVisible()
    })
  })
})