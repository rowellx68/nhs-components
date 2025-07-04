import fs from 'node:fs';
import fg from 'fast-glob';
import { deleteSync } from 'del';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const files = fg.globSync([
  'dist/**/*.mjs',
  '!dist/**/*.context.mjs',
  '!dist/**/resources/**/*.mjs',
  '!dist/**/_virtual/*',
]);

const exports = files.reduce((acc, file) => {
  const exportKey =
    file === 'dist/index.mjs'
      ? '.'
      : file.includes('/internal')
        ? file.replace('dist/', './').replace('.mjs', '')
        : file
            .split('/')
            .slice(0, -1)
            .join('/')
            .replace('dist/', './')
            .replace('.mjs', '');

  const basePath = `./${file}`.replace('.mjs', '');

  return {
    ...acc,
    [exportKey]: {
      import: `${basePath}.mjs`,
      require: `${basePath}.js`,
    },
  };
}, {});

pkg['exports'] = exports;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');

deleteSync('dist/**/*.d.ts');
