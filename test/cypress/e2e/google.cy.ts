describe('Google test', () => {
  it('Visits google page and lanch a search', () => {
    // Navigate to the page
    cy.visit('https://www.google.com/');
    // Interact with the page
    // Assert something about the page content
    //cy.contains('app is running!');
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('chat gpt {enter}');
  });
});
