/**
 * ESLint flat config for Vue 3 + TypeScript + Prettier
 */
export default [
  {
    ignores: ['node_modules', 'dist', '*.log'],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...require('eslint-plugin-vue').configs['vue3-recommended'].rules,
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
