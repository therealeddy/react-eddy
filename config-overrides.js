const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: './src',
          rootPathPrefix: '~/'
        },
        {
          rootPathSuffix: './src/app',
          rootPathPrefix: 'App/'
        }
      ]
    }
  ])
);
