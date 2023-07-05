const {createDir, copyFile, copyDir, removeDir} = require('./utils/directory');
const {compileSass} = require('./utils/compiler');

const DIRECTORY = './build'

// Generating the build folder

// 1. Removing the existing build folder
removeDir(DIRECTORY)

// 2. Creating a new build folder
createDir(DIRECTORY)

// 3. Copying all the required files into build folder
copyFile('./config.json', DIRECTORY);
copyFile('./index.ejs', DIRECTORY);

copyDir('./assets', DIRECTORY);


compileSass(DIRECTORY)

console.log("Build successfully")





