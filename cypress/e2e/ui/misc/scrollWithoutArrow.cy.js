// scrollWithoutArrow test
import HomePage from '../../../pages/HomePage'

describe('Test Case 18: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
  it('scrolls down and back up successfully', () => {
  
    HomePage.visit()
    HomePage.verifyHomePageVisible()
    cy.scrollTo('bottom')
    
    cy.contains('Subscription').should('be.visible')

    HomePage.scrollToTop()

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  })
})