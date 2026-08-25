class ContactUsPage {
  verifyGetInTouchVisible() {
    cy.contains('Get In Touch').should('be.visible')
  }

  fillContactForm(data) {
    cy.get('input[data-qa="name"]').type(data.name)
    cy.get('input[data-qa="email"]').type(data.email)
    cy.get('input[data-qa="subject"]').type(data.subject)
    cy.get('textarea[data-qa="message"]').type(data.message)
  }

  uploadFile(filePath) {
    cy.get('input[name="upload_file"]').selectFile(filePath)
  }

  clickSubmit() {
    cy.on('window:confirm', () => true)
    cy.get('input[data-qa="submit-button"]').click()
  }

  verifySuccessMessage() {
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
  }

 clickHomeButton() {
  cy.get('a[href="/"].btn-success').click()
}
}

export default new ContactUsPage()