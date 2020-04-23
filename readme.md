<h1 align="center">Eddy React 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
</p>

> Advanced template for ReactJS

## ESLint Config

Adicione o ESLint como uma dependência de desenvolvimento:

```sh
yarn add eslint -D
```

Inicie o ESLint com o comando abaixo:

```sh
yarn eslint –init
```
Responda as perguntas na seguinte ordem:

1. **How Would you like to use ESLint?**
*To check syntax, find problems, and enforce code style*

2. **What type of modules does your project use?**
*JavaScript modules (import/export)*

3. **Which framework does your project use?**
*React*

4. **Where does your code run?**
*Browser*

5. **How would you like to define a style for your project?**
*Use a popular style guide*

6. **Which style guide do you want to follow?**
*Airbnb*

7. **What format do you want your config file to be in?**
*JavaScript*

8. **Do you want to downgrade?**
*Y*

9. **Would you like to install them now with npm?**
*Y*

Depois de instalado, perceba que foi gerado um arquivo ```package-lock.json``` na raiz do projeto, isso porque foi instalado utilizando o NPM.

Remova o arquivo ```package-lock.json``` e instale as dependências novamente.

```sh
yarn
```

Depois de instalado, adicione as seguintes dependências em modo de desenvolvimento:

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Depois de instalado, perceba que foi gerado um arquivo ```.eslintrc.js``` na raiz do projeto, remova o que tem dentro do arquivo e cole o seguinte trecho de código:

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

## Author

👤 **Eduardo Mauricio**

## Show your support

Give a ⭐️ if this project helped you!
