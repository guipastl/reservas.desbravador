# Reservas/Desbravador Cypress

[![test](https://github.com/guipastl/reservas.desbravador/actions/workflows/e2eTest.yml/badge.svg)](https://github.com/guipastl/reservas.desbravador/actions)

Simple project to experiment test automation of Reservas App by Desbravador in order to explore and demonstrate the feasibility of E2E tests with [Cypress](https://cypress.io).

## Pre-requirements

You also need to have [Node.js](https://nodejs.org/) and npm installed on your computer.

For this project, the following versions of Node.js and npm were used:

```sh
$ node -v
v20.13.1

$ npm -v
10.8.0
```

## Installation

Run `npm i` to install the dependencies.

## Tests

> Before running the tests, create a `.env` file and set up your credentials and BASE_URL.


### Headless mode

Run `npx cypress run` to run all tests in headless mode.

### Interactive mode

1. Run `npx cypress open` to open the Cypress App;
2. Select E2E Testing;
3. Select one of the available browsers (e.g., Electron), and click the Start button;
4. Run any test.

___

Developed with 💚 by [Guilherme](https://www.linkedin.com/in/guipastl).