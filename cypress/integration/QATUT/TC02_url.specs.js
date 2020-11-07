describe('Create and mark/unmark as factorite', function() {
  it('Visit profile page', function() {
    cy.visit('https://demo.realworld.io/#/login');
    cy.title().should('eq', 'Sign in — Conduit');
    cy.location('protocol').should('eq', 'https:')

    cy.get('input[placeholder="Email"]').type('@gmail.com');
    cy.get('input[placeholder="Password"]').type('pw');
    cy.get('.btn').contains('Sign in').should('be.visible').click();
  
    // Default timeout of about 4 seconds.
    // Supplying optional timeout parameter.
    cy.contains('Your Feed', {timeout:1000}).should('be.visible');
  });
  
  it('Create a post', function() {
    cy.get('a[class="nav-link"]').contains('New Article').should('be.visible').click();

    // cy.location('hash').should('include', '#/editor');
    // cy.url().should('include', 'editor');
    cy.pause();
    cy.get('input[placeholder="Article Title"]').type('Title Test');
    cy.get('input[placeholder="What\'s this article about?"]').type('About test');
    cy.get('textarea[placeholder="Write about your aricle (in markdown)"]').type('MD test area');
    cy.contains('Publish Article').click();
    cy.url()
      .should('include', 'article');
  });

  it('Mark/unmark as favorite', function() {
    cy.pause();
    cy.get('.nav-link').contains('joseph_d').click();
    cy.contains('My Articles').should('be.visible');
    cy.get('.ion-heart').click();
    cy.contains('Favorited Articles').click();
    cy.url().should('include', 'favorites');
    cy.get('.ion-heart').click();

    // Reload the page.
    cy.reload();

    cy.contains('No articles are here... yet.').should('be.visible');
    cy.go('back')
    // cy.go('foward'),
    // cy.go(1);
  });

})