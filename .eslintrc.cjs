module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
