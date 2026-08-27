import HomePage from '../../../pages/HomePage'

describe('Test Case 7: Verify Test Cases Page', () => {
  it('navigates to the Test Cases page successfully', () => {
    // Steps 1-3
    HomePage.visit()
    HomePage.verifyHomePageVisible()

    HomePage.clickTestCases()

    cy.url().should('include', '/test_cases')
  })
})