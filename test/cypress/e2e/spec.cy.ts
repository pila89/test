describe('My First Test', () => {
  it('Visits the initial project page', () => {
    // Navigate to the page
    cy.visit('/');
    // Interact with the page
    // Assert something about the page content
    cy.contains('app is running!');
  });
});
