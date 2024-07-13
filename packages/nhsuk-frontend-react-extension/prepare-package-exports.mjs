import fs from 'node:fs';
import fg from 'fast-glob';
import { deleteSync } from 'del';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const jsFiles = fg
  .globSync([
    'dist/**/*.mjs',
    '!dist/**/*.context.mjs',
    '!dist/**/resources/**',
    '!**/factory/**',
    '!**/base',
  ])
  .map((file) => file.replace('/index.mjs', ''));

const cssFiles = fg.globSync(['dist/**/*.css', 'dist/**/*.scss']);

const exports = jsFiles.reduce((acc, file) => {
  const exportKey =
    file === 'dist'
      ? '.'
      : file.split('/').slice(0, -1).join('/').replace('dist/', './');

  const basePath = `./${file}`.replace('.mjs', '');

  return exportKey === '.'
    ? {
        ...acc,
        '.': {
          import: './dist/index.mjs',
          require: './dist/index.cjs',
        },
      }
    : {
        ...acc,
        [exportKey]: {
          import: `${basePath}.mjs`,
          require: `${basePath}.cjs`,
        },
      };
}, {});

const finalExports = cssFiles.reduce((acc, file) => {
  const exportKey = file.replace('dist/', './');

  return {
    ...acc,
    [exportKey]: {
      import: `./${file}`,
      require: `./${file}`,
    },
  };
}, exports);

pkg['exports'] = finalExports;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');

deleteSync('dist/**/*.d.ts');
