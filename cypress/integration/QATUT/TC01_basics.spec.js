describe('Login', function() {
  it('Sign in', function() {
    cy.visit('https://demo.realworld.io/#/login');
    cy.get('input[type="email"]').type('email@gmail.com');
    cy.get('input[type="password"]').type('password');
    cy.get('.btn').contains('Sign in').click();
  })
})