module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
