import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './src/tests',

  // Disable test timeout (no cap on test duration)
  timeout: 0,

  use: {
    browserName: 'chromium',   // Chrome
    channel: 'chrome',         // use Chrome instead of bundled Chromium
    headless: false,           // show browser window
    viewport: null,            // disables fixed viewport, allows full screen
    screenshot: 'on',
    video: 'retain-on-failure',

    launchOptions: {
      args: [
        '--start-maximized',        // open maximized
        '--disable-infobars',
        '--disable-notifications',
        '--disable-extensions',
        '--disable-popup-blocking',
        '--disable-dev-shm-usage',
        '--no-sandbox'
      ]
    },

    // clear cookies/cache before each test
    storageState: undefined
  },

  reporter: [
    ['html', { outputFolder: 'reports' }]
  ]
});