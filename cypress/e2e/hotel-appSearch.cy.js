describe('Hotel-app search engine teste', () => {
  it('hotel test search', () => {
    cy.visit('/hotel-app/search')
    cy.get('input[name="search"]').focus().type('Desbravador')
    cy.get('#rol-search-container button.d-block').click()
    cy.intercept('/reservas/modules/ws/interface.php').as('queryLoad')
    cy.get('#rol-search-container button.d-block').click()
    cy.wait('@queryLoad')
    cy.contains('Hotel Teste Desbravador 8050').should('be.visible')
  })

})