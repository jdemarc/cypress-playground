describe("Express Todos App", () => {

  
  it("Main page", () => {
    cy.visit('/');
    cy.contains('Express Todos');
  });

  it("Go to Todos page", () => {
    cy.contains('To-Do List').click();
    cy.url().should('include', '/todos');
    cy.get('ul[cy-data="todo-list"]').children().should('have.length', 3);
  });

  it("Delete a Todo", () => {
    cy.get('button[cy-data="125223"]').click();
    cy.get('ul[cy-data="todo-list"]').children().should('have.length', 2);
  });



});