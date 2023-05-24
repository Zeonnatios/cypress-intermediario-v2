/// <reference types="cypress"/>

Cypress.Commands.add("login", (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password"),
    { cacheSession = true } = {},
  ) => {

  const login = () => {
    cy.visit("/users/sign_in");
    cy.contains("GitLab Community Edition").should("be.visible");
    cy.get("[data-qa-selector='login_field']").should("be.visible").type(user);
    cy.get("[data-qa-selector='password_field']").should("be.visible").type(password);
    cy.get("[data-qa-selector='sign_in_button']").click();
  };

  const validate = () => {
    cy.visit("/")
    cy.location("pathname", { timeout: 1000 })
      .should("not.eq", "/users/sign_in")
  }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  }
  
  if (cacheSession) {
    cy.session(user, login, options);
  } else {
    login();
  }
});

Cypress.Commands.add("logout", () => {
  cy.visit("/");
  cy.get(".qa-user-avatar").click();
  cy.contains("Sign out").click();
});