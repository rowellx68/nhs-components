import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['json-summary'],
    },
    setupFiles: ['./setup-test.mjs'],
  },
});
