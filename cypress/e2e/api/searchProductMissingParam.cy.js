describe('API 6: POST To Search Product without search_product parameter', () => {
  it('returns 400 when search_product parameter is missing', () => {
    cy.request({
      method: 'POST',
      url: '/api/searchProduct',
      failOnStatusCode: false
    }).then((response) => {
      const body = JSON.parse(response.body)

      expect(body.responseCode).to.eq(400)
      expect(body.message).to.eq('Bad request, search_product parameter is missing in POST request.')
    })
  })
})