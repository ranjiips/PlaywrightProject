import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  use: {
    browserName: 'chromium',   // Chrome
    headless: false,           // show browser window
    screenshot: 'on',
    video: 'retain-on-failure'
  },
  reporter: [
    ['html', { outputFolder: 'reports' }]
  ]
});