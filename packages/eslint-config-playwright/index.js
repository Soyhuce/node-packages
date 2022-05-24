'use strict'

module.exports = {
  extends: ['plugin:playwright/playwright-test'],
  rules: {
    'playwright/no-page-pause': process.env.NODE_ENV !== 'production' ? 'off' : 'error'
  }
}
