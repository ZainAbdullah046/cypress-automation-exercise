describe('API 11: POST To Create/Register User Account', () => {
  it('creates a new user account via API', () => {
    cy.fixture('users').then((data) => {
      const user = data.newUser

      cy.request({
        method: 'POST',
        url: '/api/createAccount',
        form: true,
        body: {
          name: user.name,
          email: user.email, 
          password: user.password,
          title: user.title,
          birth_date: user.day,
          birth_month: user.month,
          birth_year: user.year,
          firstname: user.firstName,
          lastname: user.lastName,
          company: user.company,
          address1: user.address1,
          address2: user.address2,
          country: user.country,
          zipcode: user.zipcode,
          state: user.state,
          city: user.city,
          mobile_number: user.mobileNumber
        },
        failOnStatusCode: false
      }).then((response) => {
        const body = JSON.parse(response.body)
        
        expect(body.responseCode).to.eq(201)
        expect(body.message).to.eq('User created!')
      })
    })
  })
})