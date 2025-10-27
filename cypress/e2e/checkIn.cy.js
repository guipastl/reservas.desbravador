describe('CheckIn test', () => {

  it('checkIn test flow', () => {
    cy.visit(`https://checkin.desbravador.com.br/check-in/eyJpZCI6IjgwNTAiLCJzZW5oYSI6IkVBSC44NzIyIiwibG9jYWxpemFkb3IiOiI4MDUwSUQxOTAxNTk2MiIsImNoYXZlcXVhcnRvIjo0MjExNDAxOSwiZ3VpZHF1YXJ0byI6IjgwNTAtUk9MLURFVF8wOTM5NTAwMiIsImNoYXZlaG9zcGVkZSI6IjM1NTgxMDA5In0=`)
    cy.get('input[type="checkbox"]').check()
    cy.get('button').last().click()
    cy.contains('Informações Pessoais').should('be.visible')
    cy.get('#root div:nth-child(6) > button > span:nth-child(1)').click()
    cy.get('div.go1888806478')
      .should('be.visible')
      .and('have.text', 'Formulário incompleto!')
  })
})