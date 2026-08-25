describe('API 2: POST To All Products List', () => {
  it('returns responseCode 405 when using POST method (not supported)', () => {
    cy.request({
      method: 'POST',
      url: '/api/productsList',
      failOnStatusCode: false
    }).then((response) => {
      const body = JSON.parse(response.body)

      expect(body.responseCode).to.eq(405)
      expect(body.message).to.eq('This request method is not supported.')
    })
  })
})