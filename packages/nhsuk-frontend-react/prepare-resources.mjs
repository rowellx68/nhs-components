import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';
import { run as shift } from 'jscodeshift/src/Runner.js';

const commonFilePath = 'node_modules/nhsuk-frontend/packages/common.js';
const filePaths = fg.sync([
  'node_modules/nhsuk-frontend/packages/components/*/*.js',
  '!**/*.test.js',
]);

const common = fs.readFileSync(commonFilePath, 'utf8');
const files = filePaths.map((filePath) => fs.readFileSync(filePath, 'utf8'));

if (!fs.existsSync('./src/resources')) {
  fs.mkdirSync('./src/resources', { recursive: true });
}

fs.writeFileSync('./src/resources/common.js', common, {
  encoding: 'utf8',
});

const destinations = ['./src/resources/common.js'];

files.forEach(async (file, index) => {
  const content = file;

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

  destinations.push(destination);
});

shift(path.resolve('./resource-transformer.js'), destinations, { cpus: 5 });
