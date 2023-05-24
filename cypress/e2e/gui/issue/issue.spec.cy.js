/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Issue', () => {

  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
  };

  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
    project,
  };

  beforeEach(() => {
    cy.api_deleteProjects();
    cy.login();
    cy.createNewProject(project);
  });

  it('Create issue Success', () => {
    cy.createNewIssue(issue);
    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  });
});