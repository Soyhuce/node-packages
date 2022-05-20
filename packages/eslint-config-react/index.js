'use strict'

module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'warn',
    'react/no-set-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-sort-props': 'warn',
    'react/jsx-wrap-multilines': 'warn'
  }
}
