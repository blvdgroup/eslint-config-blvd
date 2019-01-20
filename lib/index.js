module.exports = {
  extends: ['eslint-config-airbnb', './rules/base', './rules/typescript'].map(require.resolve),
  rules: {}
}
