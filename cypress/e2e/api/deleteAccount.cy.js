describe('API 12: DELETE METHOD To Delete User Account', () => {
  it('deletes the user account via API', () => {
    cy.fixture('users').then((data) => {
      const user = data.newUser // same account created in API 11

      cy.request({
        method: 'DELETE',
        url: '/api/deleteAccount',
        form: true,
        body: {
          email: user.email,
          password: user.password
        },
        failOnStatusCode: false
      }).then((response) => {
        const body = JSON.parse(response.body)

        expect(body.responseCode).to.eq(200)
        expect(body.message).to.eq('Account deleted!')
      })
    })
  })
})