<h2 align="center">
  <img src="docs/react-eddy.png" height="90" alt="react-eddy" />
</h2>

<br>

<div align="center">

[![version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/therealeddy/react-eddy/releases)<space><space>
[![documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](#overview)

</div>


<br><br>

## Overview

Advanced template for ReactJS.

- **[Structure](#structure)**
- **[Dependencies](#dependencies)**
- **[Husky](#husky)**
- **[ESLint](#eslint)**
- **[Microsoft Visual Code](#microsoft-visual-code)**
- **[Author](#author)**
- **[License](#license)**
- **[Show your support](#show-your-support)**


<br><br>

## Structure

- ```components``` - Application components
- ```config``` - Configuration files
- ```hooks``` - Custom hooks
- ```images``` - Application Images
- ```layouts``` - Auth and Default layouts
- ```pages``` - Application pages
- ```routes``` - Route configuration
- ```services``` - API configuration
- ```store``` - Redux and Redux Saga configuration
- ```styles``` - Global styles and application themes
- ```utils``` - Useful files
- ```validators``` - Yup Validation
- ```App.js``` - Global imports
- ```index.js``` - Render application

<br><br>

## Dependencies

Remember to execute the command ```yarn upgrade``` to update with dependencies.

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

For standardization of commits for GitHub within a project, using the library **[Husky](https://github.com/typicode/husky)**, together with libraries **[commitizen](https://github.com/commitizen/cz-cli)**, **[lint-staged](https://github.com/okonet/lint-staged)**, **[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)** and **[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)**.

Add the Hunsky library in development.

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

After these settings, just type ```git add .``` and ```git commit``` on your terminal and Husky will take action.

Below are listed possible questions that Husky will ask.

1. Select the type of change that you're committing: (Use arrow keys)
- ```feat```:         A new feature
- ```fix```:          A bug fix
- ```docs```:         Documentation only changes
- ```style```:        Changes that do not affect the meaning of the code (white-space, for matting, missing semi-colons, etc)
- ```refactor```:     A code change that neither fixes a bug nor adds a feature
- ```perf```:         A code change that improves performance
- ```test```:         Adding missing tests or correcting existing tests
- ```build```:        Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ```ci```:           Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- ```chore```:        Other changes that don't modify src or test files
- ```revert```:       Reverts a previous commit

2. What is the scope of this change (e.g. component or file name): (press enter to skip)
3. Write a short, imperative tense description of the change (max 66 chars):
4. Provide a longer description of the change: (press enter to skip)
5. Are there any breaking changes? (y/N)
	- A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:
	- Describe the breaking changes:
6. Does this change affect any open issues? (y/N)
	- Add issue references (e.g. "fix #123", "re #123".):

<br><br>

## ESLint

For better standardization of codes within the project, we use the **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** libraries.

Install the ```ESLint``` and ```Prettier - Code formatter``` extensions in your Visual Code.

Add ESLint as a development dependency.

```sh
yarn add eslint -D
```

Start ESLint with the command below.

```sh
yarn eslint –-init
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

4. **Does your project use TypeScript?** <br/>
*(y/N)*

5. **Where does your code run?** <br/>
*Browser*

6. **How would you like to define a style for your project?** <br/>
*Use a popular style guide*

7. **Which style guide do you want to follow?** <br/>
*Airbnb*

8. **What format do you want your config file to be in?** <br/>
*JavaScript*

9. **Do you want to downgrade?** <br/>
*Y*

10. **Would you like to install them now with npm?** <br/>
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

## License

MIT © **[React Eddy](LICENSE)**

## Show your support

Give a ⭐️ if this project helped you!
