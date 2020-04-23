<h1 align="center">Eddy React 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
</p>

> Advanced template for ReactJS

## ESLint Config

Instale as extensões ```ESLint``` e ```Prettier - Code formatter``` em seu Visual Code.

Adicione o ESLint como uma dependência de desenvolvimento.

```sh
yarn add eslint -D
```

Inicie o ESLint com o comando abaixo.

```sh
yarn eslint –init
```
Responda as perguntas na seguinte ordem.

1. **How Would you like to use ESLint?** <br/>
*To check syntax, find problems, and enforce code style*

2. **What type of modules does your project use?** <br/>
*JavaScript modules (import/export)*

3. **Which framework does your project use?** <br/>
*React*

4. **Where does your code run?** <br/>
*Browser*

5. **How would you like to define a style for your project?** <br/>
*Use a popular style guide*

6. **Which style guide do you want to follow?** <br/>
*Airbnb*

7. **What format do you want your config file to be in?** <br/>
*JavaScript*

8. **Do you want to downgrade?** <br/>
*Y*

9. **Would you like to install them now with npm?** <br/>
*Y*

Depois de instalado, perceba que foi gerado um arquivo ```package-lock.json``` na raiz do projeto, isso porque foi instalado utilizando o NPM.

Remova o arquivo ```package-lock.json``` e instale as dependências novamente.

```sh
yarn
```

Depois de instalado, adicione as seguintes dependências em modo de desenvolvimento.

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Depois de instalado, perceba que foi gerado um arquivo ```.eslintrc.js``` na raiz do projeto, remova o que tem dentro do arquivo e cole o seguinte trecho de código.

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

## Microsoft Visual Code Config

Abra o arquivo ```settings.json``` do seu Visual Code e adicione o seguinte trecho de codigo.

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
  "editor.tabSize": 4,
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

## Author

👤 **Eduardo Mauricio**

## Show your support

Give a ⭐️ if this project helped you!
