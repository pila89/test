describe('Counter test', () => {
  beforeEach(() => {
    // Navigate to the page
    cy.visit('/counter');
    cy.viewport('iphone-6');

  });

  it('Visits the counter page', () => {
    cy.contains('counter works!');
  });
  context('Counter section', () => {
    it('Click the increment button', () => {
      cy.get('#increment-btn').click();
      cy.get('#count-result').contains('1');
      cy.screenshot("Increment");
    });

    it('Click the decrement button', () => {
      cy.get('#decrement-btn').click();
      cy.get('#count-result').contains('-1');
      cy.screenshot("Decrement")
    });
  });
});
