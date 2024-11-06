import daStyle from 'eslint-config-dicodingacademy';
import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    rules: { 'linebreak-style': 0 },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
