// https://docs.cypress.io/api/introduction/api.html

describe('Check correct h1 on frontpage and if button is pressed', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/dev-env-prototype/')
    cy.contains('h1', 'Games List From API')
  })

  it('changes conditional rendering when button is pressed', () => {
    cy.get('#fetchData').click();
    cy.contains('h3', 'GamesList');
  })
})



describe('Register test', () => {

  it('Visits register page', () => {
    cy.get('#toRegister').click();
    cy.get('.action-email')
      .type('fake@email.com')
    cy.get('.action-name')
      .type('fake@email.com')
    cy.get('.action-pw')
      .type('fake@email.com')
    cy.get('#submitButton').click();

  })

})