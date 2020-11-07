describe('Create and mark/unmark as factorite', function() {
  it('Visit profile page', function() {
    cy.visit('https://demo.realworld.io/#/login');
    cy.title().should('eq', 'Conduit');
    cy.location('protocol').should('eq', 'https:')
  
    cy.get('input[name="email"]').type('email@gmail.com');
    cy.get('input[name="password"]').type('password');
    cy.get('.btn').contains('Sign In').should('be.visible').click();
  
    // Default timeout of about 4 seconds.
    // Supplying optional timeout parameter.
    cy.contains('Your Feed', {timeout:10000}).should('be.visible');
  });
  
  it('Create a post', function() {
    cy.contains('New Post').click();
    cy.location().should('include', '#/editor');
    cy.get('input[placeholder="Article TItle"]').type('Title Test');
    cy.get('input[placeholder="What\'s this article about?"]').type('About test');
    cy.get('textarea[placeholder="Write about your aricle (in markdown)"]').type('MD test area');
    cy.contains('Publish Article').click();
    cy.url
      .should('include', 'aritcle');
  });

})