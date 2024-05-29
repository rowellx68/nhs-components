import fs from 'node:fs';
import fg from 'fast-glob';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const files = fg
  .globSync(['dist/**/*.js', '!dist/**/*.context.js', '!dist/**/resources/**'])
  .map((file) => file.replace('/index.js', ''));

const exports = files.reduce((acc, file) => {
  const exportKey =
    file === 'dist'
      ? '.'
      : file.split('/').slice(0, -1).join('/').replace('dist/', './');

  const basePath = `./${file}`.replace('.js', '');

  return exportKey === '.'
    ? {
        ...acc,
        '.': {
          import: './dist/index.mjs',
          require: './dist/index.js',
          types: './dist/index.d.ts',
        },
      }
    : {
        ...acc,
        [exportKey]: {
          import: `${basePath}.mjs`,
          require: `${basePath}.js`,
          types: `${basePath}.d.ts`,
        },
      };
}, {});

pkg['exports'] = exports;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
