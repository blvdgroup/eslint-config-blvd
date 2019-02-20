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
    // An additional trailing comma should not be used.
    // https://github.com/blvdgroup/guidelines/tree/master/languages/javascript#style
    'comma-dangle': ['error', 'never'],

    // Semicolons should not be used, except when strictly necessary.
    // https://github.com/blvdgroup/guidelines/tree/master/languages/javascript#style
    semi: ['error', 'never']
  }
}
