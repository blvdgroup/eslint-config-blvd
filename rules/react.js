// React
// Overrides and custom rules for React projects.
// Reference https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        // We use TypeScript for typechecking, so no need to set up PropTypes.
        'react/prop-types': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Limit JSX files to `.jsx` and `.tsx` extensions.
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }]
  }
}
