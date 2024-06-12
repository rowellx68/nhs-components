import fs from 'node:fs';
import fg from 'fast-glob';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const files = fg.globSync([
  'dist/**/*.js',
  '!dist/**/*.context.js',
  '!dist/**/resources/**',
]);

const exports = files.reduce((acc, file) => {
  const exportKey =
    file === 'dist/index.js'
      ? '.'
      : file.includes('/internal')
        ? file.replace('dist/', './').replace('.js', '')
        : file
            .split('/')
            .slice(0, -1)
            .join('/')
            .replace('dist/', './')
            .replace('.js', '');

  const basePath = `./${file}`.replace('.js', '');

  return {
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
