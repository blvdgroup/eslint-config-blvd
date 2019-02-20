// Base config

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'no-unexpected-multiline': 'error'
  }
}
