describe('API 1: Get All Products List', () => {
  it('returns all products with status 200', () => {
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/productsList'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})