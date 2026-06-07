// playwright.config.js
// See https://playwright.dev/docs/test-configuration for more options

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000, // Reduced from 60000 for faster feedback
  expect: {
    timeout: 10000, // Timeout for expect assertions
  },
  reporter: [['html'], ['list']], // Multiple reporters for better feedback
  use: {
    browserName: 'chromium',
    headless: true, // Set to true for CI/headless environments
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    slowMo: 500, // Reduced from 2000 for faster test execution
    video: 'retain-on-failure', // Only record videos on failure to save space
    screenshot: 'only-on-failure',
    baseURL:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
};

module.exports = config;


