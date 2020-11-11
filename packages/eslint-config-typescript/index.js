module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@codeday',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-shadow': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
};
