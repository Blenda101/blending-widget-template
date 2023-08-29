const sass = require('sass');
const fs = require('fs');

const compileSass = (DIRECTORY, FILENAME = 'main.css') => {
  const result = sass.compile('./styles/style.scss');
  fs;
  fs.writeFileSync(`${DIRECTORY}/${FILENAME}`, result.css);
  // console.log(result.css);
};

module.exports = { compileSass };
