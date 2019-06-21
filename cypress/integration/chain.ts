describe('Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing');
  });

  it('chain commands using aliases', () => {
    cy.get('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstBtn');

    cy.get('@firstBtn').click();

    cy.get('@firstBtn')
      .should('have.class', 'btn-success');
  });

  it('chain commands using then()', () => {
    cy.get('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button')
      .click()
      .then($element => {
        expect($element).to.have.class('btn-success');
      });
  });
});
