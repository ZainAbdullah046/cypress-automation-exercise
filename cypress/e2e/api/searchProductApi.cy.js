describe('API 5: POST To Search Product', () => {
  it('should search products successfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      body: {
        search_product: 'top'
      }
    }).then((response) => {
      const body = JSON.parse(response.body)

      expect(response.status).to.eq(200)

      expect(body.products).to.be.an('array')
      expect(body.products.length).to.be.greaterThan(0)
    })
  })
})