it('loads examples', () => {
  cy.visit('/');
  cy.contains('Login');
  cy.get('#EmailInput').type('yes');
});
