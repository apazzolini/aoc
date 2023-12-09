module.exports = {
  extends: ['eslint:recommended', 'plugin:import/errors', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'strict': ['error', 'global'],
    'curly': 'off',
    'no-unused-vars': [2, { args: 'none', argsIgnorePattern: "^_" }],
    'no-use-before-define': 'error',
    'no-prototype-builtins': 'off',
    'prefer-const': 'off',
    'no-constant-condition': 'off',

    'import/first': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
  },
  globals: {
    'describe': true,
    'expect': true,
    'test': true,
  }
}
