// TypeScript
// Overrides and custom rules for TypeScript
// Reference https://github.com/typescript-eslint/typescript-eslint

module.exports = {
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
  }
}
