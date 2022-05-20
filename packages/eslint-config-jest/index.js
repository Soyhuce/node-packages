'use strict'

module.exports = {
  plugins: ['jest', 'testing-library'],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      env: {
        'jest/globals': true
      },
      rules: {
        'jest/no-conditional-expect': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-mocks-import': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'warn',
        'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/no-await-sync-query': 'warn',
        'testing-library/no-dom-import': ['error', 'react'],
        'testing-library/no-wait-for-empty-callback': 'error',
        'testing-library/no-wait-for-snapshot': 'error'
      }
    }
  ]
}
