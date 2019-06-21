describe('Test Suite', () => {
  it('Sending a message to contact form', () => {
    cy.visit('https://valor-software.com/contact.html');  // 1

    cy.get('input#Name')  // 2
      .type('Ellina Frolova');  // 3

    cy.get('input#Emial')  // 4
      .type('ellina.frolova@valor-software.com');  // 5

    cy.get('textarea#Message') // 6
      .type('Hello! it is Cypress Sample example'); // 7

    cy.get('input[type="submit"]') // 8
      .click(); // 9

    cy.get('h3.sec__suc') // 10
      .should('contain', 'Thank you!');
  });
});
