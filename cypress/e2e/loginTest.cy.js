describe('Login tests', () => {

  beforeEach(() => {
    cy.intercept('/reservas/modules/ws/interface.php').as('pageLoad')
    cy.visit('/hotel-app/hotel-teste-desbravador-8050')
    cy.wait('@pageLoad')
  })

  it('validate login successfully', () => {
    cy.get('#popover-login', { timeout: 10000 }).click()
    cy.get('input[type="email"]').focus().type(Cypress.env('user_email'))
    cy.get('input[type="password"]').focus().type(Cypress.env('user_pass'))
    cy.get('.form-check-input').last().check()
    cy.get('button[type="submit"]').click()
    cy.get('#nav-user a.nav-link')
      .should('have.text', Cypress.env('user_name'));
    cy.get('div.toast-message', { timeout: 10000 })
      .should('be.visible')
      .and('have.text', 'Logado com sucesso')
  })

  it('validate error message when logging in.', () => {
    cy.get('#popover-login').click()
    cy.get('input[type="email"]').focus().type(Cypress.env('user_email'))
    cy.get('input[type="password"]').focus().type('abc123')
    cy.get('.form-check-input').last().check()
    cy.get('button[type="submit"]').click()
    cy.get('div.toast-message', { timeout: 10000 })
      .should('be.visible')
      .and('have.text', 'Login inválido')
  })

  it('validate log out successfully.', () => {
    cy.login()
    cy.visit('/hotel-app/hotel-teste-desbravador-8050')
    cy.get('#nav-user a.nav-link', { timeout: 10000 }).click()
    cy.get('#nav-user button:nth-child(4)').click()
    cy.get('#root li.link a.link span.ml-1').should('have.text', 'Registre-se')
    cy.get('#popover-login span.ml-1').should('have.text', 'Entrar')
  })
})