// Base
// Default configurations and extensions to the Airbnb ESLint config.

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

    // Max line-length is 140.
    'max-len': ['error', { code: 140, ignoreUrls: true }],

    // Disable multiline expressions and lines that start with `[` or `(`.
    'no-unexpected-multiline': 'error',

    // Semicolons should not be used, except when strictly necessary.
    // https://github.com/blvdgroup/guidelines/tree/master/languages/javascript#style
    semi: ['error', 'never']
  }
}
