// https://docs.cypress.io/api/introduction/api.html

describe('Check correct h1 on frontpage and if button is pressed', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/dev-env-prototype/')
    cy.contains('h1', 'Games List From API')
    
  })

  it('Checks to see if we get some data from the API', () => {
    cy.get('#fetchData').click();
    cy.contains('h3', 'GamesList');
    cy.stub()
   
  })
})



describe('Register test', () => {

  it('Goes to register view and adds a new random user to Firebase', () => {
    
    cy.get('#toRegister').click();
    cy.get('.action-email')
      .type(Math.round(Math.random()*100000)+"@email.com")
    cy.get('.action-name')
      .type('Allan Simonsen')
    cy.get('.action-pw')
      .type('fake@email.com')
      cy.url().should('include', 'register')
    cy.get('#submitButton').click();

  })

})