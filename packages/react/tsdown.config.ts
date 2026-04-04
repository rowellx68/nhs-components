import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/index.ts',
  exports: true,
  outDir: 'dist',
  clean: true,
  sourcemap: false,
  dts: true,
  unbundle: true,
  deps: {
    neverBundle: [/node_modules/],
  },
});
