<h1 align="center">🚀 React Eddy 🚀</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
</p>

<br><br>

## Overview

Advanced template for ReactJS.

- **[Structure](#structure)**
- **[Dependencies](#dependencies)**
- **[Husky](#husky)**
- **[ESLint](#eslint)**
- **[Microsoft Visual Code](#microsoft-visual-code)**
- **[Author](#author)**
- **[Show your support](#show-your-support)**


<br><br>

## Structure

<br><br>

## Dependencies

**Normal:**
- axios
- date-fns
- history
- json-server
- react-icons
- react-redux
- react-router-dom
- react-toastify
- reactotron-react-js
- reactotron-redux
- reactotron-redux-saga
- redux
- redux-persist
- redux-saga
- styled-components
- yup

**Dev Dependencies:**
- @babel/plugin-proposal-optional-chaining
- babel-plugin-root-import
- customize-cra
- react-app-rewired

<br><br>

## Husky

Add the hunsky library in development.

```sh
yarn add husky -D
```

Also add the following libraries below, under development.

```sh
yarn add commitizen lint-staged @commitlint/config-conventional @commitlint/cli -D
```

Paste the excerpt below into your file ```package.json```.

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix --ignore-pattern '!.eslintrc.js'",
      "git add ."
    ]
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

Create a file called ```commitlint.config.js``` at the root of the project and paste the code below.

```javascript
module.exports = { extends: ['@commitlint/config-conventional'] };
```

<br><br>

## ESLint

Install the ```ESLint``` and ```Prettier - Code formatter``` extensions in your Visual Code.

Add ESLint as a development dependency.

```sh
yarn add eslint -D
```

Start ESLint with the command below.

```sh
yarn eslint --init
```

Or

```sh
./node_modules/.bin/eslint --init
```

Answer the questions in the following order.

1. **How Would you like to use ESLint?** <br>
*To check syntax, find problems, and enforce code style*

2. **What type of modules does your project use?** <br>
*JavaScript modules (import/export)*

3. **Which framework does your project use?** <br>
*React*

4. **Does your project use TypeScript?** <br>
*(y/N)*

5. **Where does your code run?** <br>
*Browser*

6. **How would you like to define a style for your project?** <br>
*Use a popular style guide*

7. **Which style guide do you want to follow?** <br>
*Airbnb*

8. **What format do you want your config file to be in?** <br>
*JavaScript*

9. **Do you want to downgrade?** <br>
*Y*

10. **Would you like to install them now with npm?** <br>
*Y*

Once installed, notice that a ```package-lock.json``` file was generated at the root of the project, because it was installed using NPM.

Remove the ```package-lock.json``` file and install the dependencies again.

```sh
yarn
```

Once installed, add the following dependencies in development mode.

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint eslint-plugin-import-helpers eslint-import-resolver-babel-plugin-root-import -D
```

Once installed, notice that an ```.eslintrc.js``` file was generated at the root of the project, remove what is inside the file and paste the following code snippet.

```javascript
module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'eslint-import-resolver-babel-plugin-root-import',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-return-assign': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-cycle': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'no-prototype-builtins': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: false },
      },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'error',
    'react/prop-types': 'error',
  },
  settings: {
    'import/resolver': 'babel-plugin-root-import',
  },
};
```

Create a file at the root of the project called ```.prettierrc``` and paste the json below.

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

<br><br>

## Microsoft Visual Code

Open your Visual Code ```settings.json``` file and add the following code snippet.

```json
{
  "window.zoomLevel": 0,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.colorTheme": "Dracula",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "workbench.iconTheme": "material-icon-theme",
  "editor.rulers": [80, 120],
  "editor.renderLineHighlight": "gutter",
  "editor.tabSize": 2,
  "terminal.integrated.fontSize": 14,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "javascript.updateImportsOnFileMove.enabled": "never",
  "editor.parameterHints.enabled": false,
  "breadcrumbs.enabled": true,
  "javascript.suggest.autoImports": false,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    },
  ],
}
```

<br><br>

## Author

👤 **[Eduardo Mauricio](https://github.com/therealeddy)**

## Show your support

Give a ⭐️ if this project helped you!
