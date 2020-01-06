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

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '#region', '#endregion', '/'] // space here to support sprockets directives and typescript reference comments
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '#region', '#endregion', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true
        }
      }
    ],

    // Semicolons should not be used, except when strictly necessary.
    // https://github.com/blvdgroup/guidelines/tree/master/languages/javascript#style
    semi: ['error', 'never']
  }
}
