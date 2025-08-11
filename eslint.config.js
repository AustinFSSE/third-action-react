import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import * as parser from '@babel/eslint-parser';

export default [
  // Base configuration for all files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        React: true,
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^(React|MainContent|HelpBox|HelpArea|App)$',
        args: 'none'
      }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  // Additional configuration for test files
  {
    files: ['**/*.test.{js,jsx}', '**/test/**/*.{js,jsx}', 'src/test/setup.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    }
  }
];
