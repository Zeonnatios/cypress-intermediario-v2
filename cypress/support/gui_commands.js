/// <reference types="cypress"/>

Cypress.Commands.add("login", (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password"),
  ) => {

    cy.visit('users/sign_in');
    cy.contains('GitLab Community Edition')
      .should("be.visible");
    cy.get("[data-qa-selector='login_field']")
      .should("be.visible")
      .type(user);
    cy.get("[data-qa-selector='password_field']")
      .should("be.visible")
      .type(password);
    cy.get("[data-qa-selector='sign_in_button']")
      .click();
    cy.contains('Welcome to GitLab')
      .should("be.visible");
});

Cypress.Commands.add("logout", () => {
  cy.login();
  cy.get(".qa-user-avatar").click();
  cy.contains("Sign out").click();
  cy.url().should("equal", `${Cypress.config('baseUrl')}users/sign_in`);
});