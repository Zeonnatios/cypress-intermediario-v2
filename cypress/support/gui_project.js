/// <reference types="cypress"/>

Cypress.Commands.add("createNewProject", ({name, description}) => {
  cy.visit('/projects/new');
  cy.get('#project_name').should("be.visible").type(name);
  cy.get('#project_description').should("be.visible").type(description);
  cy.get('.qa-initialize-with-readme-checkbox').check();
  cy.contains('Create project').click();
});

Cypress.Commands.add("createNewIssue", (issue) => {
  cy.visit(`/${Cypress.env("user_name")}/${issue.project.name}/issues/new`);
  cy.get('.qa-issuable-form-title').should("be.visible").type(issue.title);
  cy.get('.qa-issuable-form-description').should("be.visible").type(issue.description);
  cy.contains('Submit issue').click();
});

Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('.qa-edit-link-labels').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
  cy.get('.block.milestone .edit-link').click()
  cy.contains(milestone.title).click()
})