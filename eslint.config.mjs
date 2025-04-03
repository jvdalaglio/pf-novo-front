import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import nextPlugin from 'eslint-config-next'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'

export default [
  js.configs.recommended,

  nextPlugin,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },

  {
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['error'] }],
      indent: ['error', 2],
      'react/jsx-indent': ['error', 2]
    }
  },
  tsPlugin.configs.recommended
]
