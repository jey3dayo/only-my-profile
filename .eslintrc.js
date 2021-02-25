module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    react: {
      createClass: 'createReactClass',
      version: 'detect',
    },
    'import/core-modules': ['styled-jsx/css'],
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks'],
  rules: {
    'class-methods-use-this': 0,
    'global-require': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'react/destructuring-assignment': [0, 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
};
