var sass = require('node-sass');
const fs = require('fs');

const compileSass = (DIRECTORY, FILENAME = 'main.css', next) => {
  sass.render(
    {
      file: 'styles/style.scss',
      outputStyle: 'compressed',
    },
    (error, result) => {
      if (error) {
        console.log(error);
      }
      fs.writeFile(`${DIRECTORY}/${FILENAME}`, result.css, function (err) {
        if (err) {
          console.log(err);
        } else {
          if (next) next();
        }
      });
    },
  );
};

module.exports = {
  compileSass,
};
