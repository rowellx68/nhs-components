import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: [
        'node_modules/**',
        '**/__tests__',
        '**/*.(test|spec)',
        '**/setup-tests.*',
        '**/test-utils.*',
      ],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: {
        components: path.resolve(__dirname, 'src/index.ts'),
        icons: path.resolve(__dirname, 'src/icons/index.ts'),
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/utils/setup-tests.ts',
    coverage: {
      provider: 'istanbul',
    },
  },
})
