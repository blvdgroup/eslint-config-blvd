# eslint-config-blvd

> ✨ An ESLint config that conforms to the blvd [JavaScript/TypeScript styleguide](https://github.com/blvdgroup/guidelines).

## Installation

Install `eslint` and `eslint-config-blvd` using yarn:

```bash
yarn add --dev eslint eslint-config-blvd
```

or, for npm:

```bash
npm install --save-dev eslint eslint-config-blvd
```

## Usage

In your `.eslintrc` file, extend `eslint-config-blvd`.

```json
{
  "extends": "eslint-config-blvd"
}
```

### React rules

For React projects, extend `eslint-config-blvd/react`.

```json
{
  "extends": ["eslint-config-blvd/react"]
}
```

### Using TypeScript

To use `eslint-config-blvd` with TypeScript, you need to do a little additional setup to make `eslint-plugin-import` play well with TypeScript. First, install `eslint-import-resolver-typescript`.

```bash
# yarn
yarn add --dev eslint-import-resolver-typescript
```

Then, on your `.eslintrc`:

```js
module.exports = {
  // other configuration are omitted for brevity
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  }
}
```

### Prettier

[Prettier](https://prettier.io/) is an automated code formatter for JavaScript, TypeScript, and other languages.

This eslint config works alongside Prettier, too. To use it, install Prettier as well as `eslint-config-prettier` to your project.

```bash
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

Create a `.prettierrc` file. Then add the following configs. This should make Prettier automatically format your code based
on the blvd guidelines.

```json
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 140,
  "singleQuote": true,
  "trailingComma": "none"
}
```

Then include `eslint-config-prettier` in your project. **IMPORTANT:** You must add `prettier` extends after extending the `blvd` config!

```json
{
  "extends": ["blvd", "prettier", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

Also include `eslint-config-prettier/react` for React projects.

```json
{
  "extends": ["blvd/react", "prettier", "prettier/@typescript-eslint", "prettier/react", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
