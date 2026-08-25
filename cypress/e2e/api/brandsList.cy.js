describe('API 3: Get All Brands List', () => {
  it('logs the actual brands response', () => {
    cy.request({
      method: 'GET',
      url: '/api/brandsList'
    }).then((response) => {
       expect(response.status).to.eq(200)
       expect(body).to.have.property('brands')
      cy.log('BODY:', JSON.stringify(response.body))
    })
  })
})