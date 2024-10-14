import { defineConfig } from 'cypress';
import { installPlugin } from '@chromatic-com/cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Adjusted to match the correct port
    viewportWidth: 1280,
    viewportHeight: 720,
    experimentalStudio: true, // Cypress Studio enabled
    setupNodeEvents(on, config) {
      installPlugin(on, config); // Plugin setup
      // implement node event listeners here if needed
    },
  },
});


