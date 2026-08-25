describe('API 7: POST To Verify Login with valid details', () => {
  it('returns "User exists!" for valid login credentials', () => {
    cy.fixture('users').then((data) => {
      const user = data.existingUser

      cy.request({
        method: 'POST',
        url: '/api/verifyLogin',
        form: true,
        body: {
          email: user.email,
          password: user.password
        }
      }).then((response) => {
        const body = JSON.parse(response.body)

        expect(body.responseCode).to.eq(200)
        expect(body.message).to.eq('User exists!')
      })
    })
  })
})