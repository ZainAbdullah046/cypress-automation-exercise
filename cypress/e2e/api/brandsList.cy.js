describe('API 3: Get All Brands List', () => {
  it('returns all brands with status 200', () => {
    cy.request({
      method: 'GET',
      url: '/api/brandsList'
    }).then((response) => {
      const body = JSON.parse(response.body)

      expect(response.status).to.eq(200)
      expect(body.responseCode).to.eq(200)
      expect(body).to.have.property('brands')
      expect(body.brands).to.be.an('array')
    })
  })
})
