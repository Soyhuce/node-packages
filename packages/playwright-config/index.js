'use strict'

// @ts-check
import { devices } from '@playwright/test'

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  workers: 2,
  retries: 2,
  use: {
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
}
