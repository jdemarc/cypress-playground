describe('Login', function() {
  it('Log In', function() {
    cy.visit('https://parley-chat.herokuapp.com');
    cy.title().should('eq', 'PARLEY');
    cy.location('protocol').should('eq', 'https:')

    cy.get('svg[class="bi bi-arrow-bar-right"]').click();

    cy.get('input[name="email"]').type('j@j.com');
    cy.get('input[name="password"]').type('test');
    cy.get('.btn').contains('Log In').should('be.visible').click();

    // Default timeout of about 4 seconds.
    // Supplying optional timeout parameter.
    cy.contains('Signed in as Joseph', {timeout:10000}).should('be.visible');
  })

  // it('Visit profile', function() {
  //   cy.get('svg[class="bi bi-pen"]').click();
  // })
})