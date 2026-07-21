import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { Secrets } from './support/secrets'

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30_000,
  expect: {timeout: 10_000},
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],['html', { outputFolder: '../reports/html' }],['allure-playwright']
],
  use: {
    baseURL: Secrets.BASE_URL,
    headless: Secrets.HEADLESS,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']}
    }
  ]
});