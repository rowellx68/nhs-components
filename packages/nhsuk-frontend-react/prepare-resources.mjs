import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';

const commonFilePath = 'node_modules/nhsuk-frontend/packages/common.js';
const filePaths = fg.sync([
  'node_modules/nhsuk-frontend/packages/components/*/*.js',
  '!**/*.test.js',
]);

const nhsPackageVersion = JSON.parse(
  fs.readFileSync('node_modules/nhsuk-frontend/package.json', 'utf8'),
).version;

const common = fs.readFileSync(commonFilePath, 'utf8');
const files = filePaths.map((filePath) => fs.readFileSync(filePath, 'utf8'));

const addBanner = (content) => `/**
* The contents of this file was automatically generated from the NHS.UK Frontend package v${nhsPackageVersion}.
*
* Do not make changes to this file directly.
*/

${content}`;

if (!fs.existsSync('./src/resources')) {
  fs.mkdirSync('./src/resources', { recursive: true });
}

fs.writeFileSync('./src/resources/common.js', addBanner(common), {
  encoding: 'utf8',
});

files.forEach((file, index) => {
  const content = addBanner(file.replace('../../common', '../common'));

  const destination = filePaths[index].replace(
    'node_modules/nhsuk-frontend/packages/components',
    './src/resources',
  );
  const resourceFolder = path.dirname(destination);

  if (!fs.existsSync(resourceFolder)) {
    fs.mkdirSync(resourceFolder, { recursive: true });
  }

  fs.writeFileSync(destination, content, {
    encoding: 'utf8',
  });
});
