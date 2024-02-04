/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "require-await": ['error'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': ['error'],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/no-use-v-if-with-v-for': ['error'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_'
      }
    ],
    'vue/no-reserved-component-names': ['error'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: []
      }
    ]
  }
};
