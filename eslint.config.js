import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'tests/screens',
      'playwright-report',
      'test-results',
      'content',
      'ressources',
      'sources-texte',
      'tools',
      'agentic',
      '.claude',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
)
