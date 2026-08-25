describe('API 9: DELETE To Verify Login', () => {
  it('returns 405 when using DELETE method (not supported)', () => {
    cy.request({
      method: 'DELETE',
      url: '/api/verifyLogin',
      failOnStatusCode: false
    }).then((response) => {
      const body = JSON.parse(response.body)

      expect(body.responseCode).to.eq(405)
      expect(body.message).to.eq('This request method is not supported.')
    })
  })
})