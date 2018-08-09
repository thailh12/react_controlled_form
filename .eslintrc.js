module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/require-extension': 'off',
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [2, 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'class-methods-use-this': 0,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'no-use-before-define': [2, 'nofunc'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'no-use-before-define': [2, 'nofunc'],
    'comma-dangle': [0],

    'no-underscore-dangle': [0]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.prod.babel.js'
      }
    }
  }
};
