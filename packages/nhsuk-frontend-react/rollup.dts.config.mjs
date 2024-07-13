import { defineConfig } from 'rollup';
import fg from 'fast-glob';
import path from 'path';
import { fileURLToPath } from 'node:url';
import dts from 'rollup-plugin-dts';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

const entries = fg.globSync(['dist/**/*.d.ts']).map((file) => [
  path.relative('dist', file.slice(0, file.length - 5)),
  // eslint-disable-next-line no-undef
  fileURLToPath(new URL(file, import.meta.url)),
]);

const baseConfig = {
  input: Object.fromEntries(entries),
  plugins: [
    typescriptPaths({
      transform: (path) =>
        path.replace(/src\//, 'dist/').replace(/\.js/, '.d.ts'),
    }),
    dts(),
  ],
};

export default defineConfig([
  {
    output: [{ dir: 'dist', format: 'cjs', entryFileNames: '[name].d.cts' }],
    ...baseConfig,
  },
  {
    output: [{ dir: 'dist', format: 'esm', entryFileNames: '[name].d.mts' }],
    ...baseConfig,
  },
]);
