describe('API 4: PUT To All Brands List', () => {
  it('returns responseCode 405 when using PUT method (not supported)', () => {
    cy.request({
      method: 'PUT',
      url: '/api/brandsList',
      failOnStatusCode: false
    }).then((response) => {
      const body = JSON.parse(response.body)

      expect(body.responseCode).to.eq(405)
      expect(body.message).to.eq('This request method is not supported.')
    })
  })
})