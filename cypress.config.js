const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
