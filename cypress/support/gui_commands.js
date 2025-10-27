// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (
  user = Cypress.env('user_email'),
  pass = Cypress.env('user_pass'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/hotel-app/hotel-teste-desbravador-8050')

    cy.get('#popover-login', { timeout: 20000}).click()
    cy.get('input[type="email"]').focus().type(user)
    cy.get('input[type="password"]').focus().type(pass)
    cy.get('.form-check-input').last().check()
    cy.get('button[type="submit"]').click()
  }

  const validate = () => {
    cy.request({
      method: 'POST',
      url: '/reservas/modules/ws/interface.php',
      headers:  { Authorization: 'Basic cm9sRHNsOkJyNDVpMUAyMDE4' },
      body: {
        wsrolRQ: {
          hotelLoginRQ: {
            slug: "hotel-teste-desbravador-8050",
            ip: "189.30.96.142"
          },
          reservasRQ: {
            atualizar: {
              id: {
                etapa: 1,
                cdlog: 0,
                fgcrs: 1,
                origem: 'rolweb'
              },
              dados: {
                iporigem: "189.30.96.142",
                cdpessoa: Cypress.env('user_id'),
                cdpessoalog: 0,
                origempessoa: 1,
                lang:1
              }
            }
          }
        }
      }
    }).then((resp) => {
      expect(resp.status).to.equals(200)
      expect(resp.body.wsrolRS.status.msg).to.equals('Identifica&ccedil;&atilde;o OK.')
    })
  }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add('selectDate', () => {
  // It's possible to determine any day in the future by passing a unix time value
  cy.get('div[time*="17640"]').click()
  cy.get('div[time*="17642"]').first().click()
})

Cypress.Commands.add('selectGuests', () => {
  cy.get('input[name="calendar-adults"]').focus().type('2')
  cy.get('.btn-children').first().focus().click()
  cy.get('#faixa1').focus().type('1')
})

Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
  cy.intercept('/reservas/modules/ws/interface.php', (req) => {
    req.continue((res) => {
      if (res.body.wsrolRS.hotelInfoRS)
        res.send({ fixture: 'hotelData.json'})
    })
  }).as('hotelLoad')
  cy.visit('/hotel-app/hotel-teste-desbravador-8050')
  cy.wait('@hotelLoad')
})
