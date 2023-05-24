import { faker } from "@faker-js/faker";
/// <reference types="cypress"/>

describe('Create Project', () => {

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login();
  })

  it('Create a project successfully', () => {
      const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      };

      cy.createNewProject(project);
      cy.url().should("equal", `${Cypress.config('baseUrl')}/${Cypress.env("user_name")}/${project.name}`);
      cy.contains(`Project '${project.name}' was successfully created.`)
        .should("be.visible");
  
  });
});