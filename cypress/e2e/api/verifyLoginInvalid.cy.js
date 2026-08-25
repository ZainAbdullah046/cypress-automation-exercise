describe('API 10: POST To Verify Login with invalid details', () => {
  it('returns 404 when login details are invalid', () => {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true,
      body: {
        email: 'nonexistentuser99999@example.com',
        password: 'WrongPassword123'
      },
      failOnStatusCode: false
    }).then((response) => {
      const body = JSON.parse(response.body)
    
      expect(body.responseCode).to.eq(404)
      expect(body.message).to.eq('User not found!')
    })
  })
})