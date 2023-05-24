/// <reference types="cypress"/>

describe('Logout', () => {

  beforeEach(() => {
    cy.login();
  });

  it('Logout Success', () => {
    cy.logout();
    cy.url().should("equal", `${Cypress.config("baseUrl")}/users/sign_in`);
  })
})