describe('API 14: GET user account detail by email', () => {
  it('returns user details for a valid email', () => {
    cy.fixture('users').then((data) => {
      const user = data.newUser // same account created in API 11

      cy.request({
        method: 'GET',
        url: `/api/getUserDetailByEmail?email=${user.email}`
      }).then((response) => {
        const body = JSON.parse(response.body)

         
        expect(body.responseCode).to.eq(200)

        cy.log(JSON.stringify(body.user, null, 2))
      })
    })
  })
})