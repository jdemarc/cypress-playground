describe('Login', function() {
  it('Log In', function() {
    cy.visit('https://parley-chat.herokuapp.com/login');
    cy.pause();

    cy.get('input[name="email"]').type('j@j.com');
    cy.get('input[name="password"]').type('filler');
    cy.get('.btn').contains('Log In').should('be.visible').click();
  })
})