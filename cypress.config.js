const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    env: {
      email: 'ls8988559@gmail.com',
      password: 'PruebaQuipux1990',
      recipient: 'santi950312@gmail.com',
      filePath: ''
    },
    baseUrl: 'https://www.gmail.com',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
