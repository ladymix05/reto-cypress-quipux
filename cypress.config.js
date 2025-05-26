const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    env: {
      email: '<email de prueba>',
      password: '<contraseña del email>',
      recipient: '<correo destinatario>',
      filePath: '<ruta de archivo a adjuntar>'
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
