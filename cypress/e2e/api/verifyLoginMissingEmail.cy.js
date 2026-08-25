describe('API 8: POST To Verify Login without email parameter', () => {
  it('returns 400 when email parameter is missing', () => {
    cy.fixture('users').then((data) => {
      const user = data.existingUser

      cy.request({
        method: 'POST',
        url: '/api/verifyLogin',
        form: true,
        body: {
          password: user.password

        },
        failOnStatusCode: false
      }).then((response) => {
        const body = JSON.parse(response.body)

        expect(body.responseCode).to.eq(400)
        expect(body.message).to.eq('Bad request, email or password parameter is missing in POST request.')
      })
    })
  })
})