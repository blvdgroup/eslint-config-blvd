// TypeScript
// Overrides and custom rules for TypeScript
// Reference https://github.com/typescript-eslint/typescript-eslint

const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/lib/configs/recommended.json')
const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint')

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'].map(require.resolve),
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: 'typescript-eslint-parser',
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: Object.assign(typescriptEslintRecommended.rules, typescriptEslintPrettier.rules, {
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'no-undef': 'off'
  })
}
