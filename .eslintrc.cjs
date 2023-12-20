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
    strict: ['error', 'global'],
    curly: 'off',
    'no-unused-vars': [2, { args: 'none', argsIgnorePattern: '^_' }],
    'no-use-before-define': 'error',
    'no-prototype-builtins': 'off',
    'prefer-const': 'off',
    'no-constant-condition': 'off',

    'import/default': 'off',
    'import/extensions': ['error', 'never', { json: 'always' }],
    'import/first': 'error',
    'import/namespace': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
  globals: {
    describe: true,
    expect: true,
    test: true,
  },
};
