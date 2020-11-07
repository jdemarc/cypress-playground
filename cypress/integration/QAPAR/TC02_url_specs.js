describe('Edit profile', function() {
  it('Visit profile page', function() {
    cy.visit('https://parley-chat.herokuapp.com');
    cy.title().should('eq', 'PARLEY');
    cy.location('protocol').should('eq', 'https:')
  
    cy.get('svg[class="bi bi-arrow-bar-right"]').click();
  
    cy.get('input[name="email"]').type('j@j.com');
    cy.get('input[name="password"]').type('test1');
    cy.get('.btn').contains('Log In').should('be.visible').click();
  
    // Default timeout of about 4 seconds.
    // Supplying optional timeout parameter.
    cy.contains('Signed in as Joseph', {timeout:10000}).should('be.visible');
  
    cy.get('svg[class="bi bi-pen"]').click();
    cy.contains('Manage Profile').should('be.visible');

    cy.url()
      .should('include', '/profile');
  });
  
  it('test2', function() {
  
  });

})