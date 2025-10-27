/**
 * Utilizando uma linguagem de automação de sua preferência, crie um script que realize
  os seguintes passos:
    1. Acessar o endereço https://reservas.desbravador.com.br/1111
    2. Verificar a disponibilidade de reserva para no mínimo 03 dias
    3. Selecionar o quarto STANDARD ST1
    4. Adicionar na reserva 02 Adultos e 01 criança até 05 anos
    5. Informar os hospedes da reserva
    6. Efetuar pagamento com cartão de crédito descrito abaixo. NUMERO: 4000 0000 0000 0044
      NOME: DESBRAVADOR SOFTWARE
      VALIDADE: 12/23
      CVC: 123.
 */
describe('Full reservation test', () => {

  beforeEach(() => cy.login())

  it('check availability flow', () => {
    cy.solveGoogleReCAPTCHA()
    cy.selectDate()
    cy.selectGuests()
    cy.contains('Verificar Disponibilidade').click()
    cy.get('.cart-empty-text', {  timeout: 20000 })
      .should('be.visible')
      .and('have.text', 'Carrinho vazio')
  })

  it.skip('add to kart flow', () => {

  })

  it.skip('add to options flow', () => {

  })

  it.skip('identify guests flow', () => {

  })

  it.skip('checkout flow', () => {

  })
})