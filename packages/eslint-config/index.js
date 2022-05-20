'use strict'

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    require.resolve('./rules/prettier'),
    'prettier',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  ignorePatterns: ['**/dist/** ', '**/build/**'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'no-debugger': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'comma-dangle': ['error', 'never']
  }
}
