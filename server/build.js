const {
  createDir,
  copyFile,
  copyDir,
  removeDir,
} = require('./utils/directory');
const { zipper } = require('./utils/zipper');
const { compileSass } = require('./utils/sass');
const config = require('../config.json');

const DOMAIN = [
  'Plan',
  'Recipe',
  'GeneralBlog',
  'Ingredient',
  'Nutrient',
  'Wiki',
];

if (!config.title || !config.domain)
  throw Error('You must declare title and domain in the config.json file');
if (!DOMAIN.includes(config.domain))
  throw Error(
    `Incorrect domain: You must choose options between ${DOMAIN.join(', ')}`,
  );

const DIRECTORY = './build';

// Generating the build folder

// 1. Removing the existing build folder
removeDir(DIRECTORY);

// 2. Creating a new build folder
createDir(DIRECTORY);

// 3. Copying all the required files into build folder
copyFile('./config.json', DIRECTORY);
copyFile('./index.ejs', DIRECTORY);

copyDir('./assets', DIRECTORY);

compileSass(DIRECTORY);

zipper(DIRECTORY);
