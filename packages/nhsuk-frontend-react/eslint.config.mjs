import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
  eslint.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    jsx: true,
    semi: true,
    commaDangle: 'always-multiline',
  }),
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/quote-props': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/jsx-wrap-multilines': 'off',
      '@stylistic/multiline-ternary': 'off',
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.mjs', '**/vitest.config.*', '**/.storybook/*'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: ['**/dist/', '**/node_modules/'],
  },
);
