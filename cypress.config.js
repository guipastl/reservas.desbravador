const { defineConfig } = require("cypress")
const dotenv = require('dotenv')

dotenv.config()


module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.BASE_URL,

    env: {
      user_email: process.env.USER_EMAIL,
      user_name: process.env.USER_NAME,
      user_pass: process.env.USER_PASS,
      user_id: process.env.USER_ID,

      requestMode: true,
    }
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
