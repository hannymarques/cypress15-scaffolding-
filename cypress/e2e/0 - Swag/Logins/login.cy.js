/// <reference types="cypress" />

context('Logins', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login válido com usuário padrão', () => {
    cy.get('[data-test="login-credentials"]').click();
    cy.get('[data-test="login-credentials"]').click();
    cy.get('#login_button_container form').click();
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="login-password"]').click();
    cy.get('[data-test="login-password"]').click();
    cy.get('[data-test="login-password"]').click();
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });


})  