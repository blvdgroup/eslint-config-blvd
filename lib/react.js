module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('./rules/base'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/react')
  ],
  rules: {}
}
