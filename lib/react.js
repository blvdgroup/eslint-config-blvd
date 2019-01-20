module.exports = {
  extends: ['eslint-config-airbnb', './rules/base', './rules/typescript'].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {}
}
