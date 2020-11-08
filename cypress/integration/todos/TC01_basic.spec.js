describe("Express Todos App", () => {
  it("Navigate to page", () => {
    cy.visit('/');
    cy.contains('Express To-Do');
  });
  
});