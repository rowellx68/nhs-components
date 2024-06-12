import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';

const outputOptions = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: 'src',
};

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].js',
        exports: 'auto',
        ...outputOptions,
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].mjs',
        ...outputOptions,
      },
    ],
    external: [/node_modules/],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      scss({
        fileName: 'nhsuk-extension.css',
      }),
      preserveDirectives(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/stories/**',
          '**/*.stories.tsx',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.spec.ts',
        ],
      }),
      typescriptPaths(),
    ],
    onwarn: ({ pluginCode, message, code }, logger) => {
      if (
        (code === 'PLUGIN_WARNING' && pluginCode === 'TS5055') ||
        (code === 'MODULE_LEVEL_DIRECTIVE' && /"use client"/.test(message))
      ) {
        return;
      }

      logger(message);
    },
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      typescriptPaths({
        transform: (path) =>
          path.replace(/src\//, 'dist/').replace(/\.js/, '.d.ts'),
      }),
      dts(),
    ],
  },
  {
    input: 'src/nhsuk-extension.scss',
    output: {
      file: 'dist/nhsuk-extension.css',
    },
    plugins: [
      scss({
        fileName: 'nhsuk-extension.css',
      }),
      copy({
        targets: [
          {
            src: 'src/components/navigation/**/*.scss',
            dest: 'dist/components/navigation',
          },
          {
            src: 'src/components/form-elements/**/*.scss',
            dest: 'dist/components/form-elements',
          },
        ],
      }),
    ],
    onwarn: ({ message, code }, logger) => {
      if (code === 'EMPTY_BUNDLE' || code === 'FILE_NAME_CONFLICT') {
        return;
      }

      logger(message);
    },
  },
]);
