var sass = require('node-sass');
const fs = require('fs');

const compileSass = (DIRECTORY) => {
  sass.render({
    file: 'styles/main.scss',
    outputStyle: 'compressed',
  }, (error, result) => {
    console.log(error)
    fs.writeFile(`${DIRECTORY}/main.css`, result.css, function(err){
      console.log(err)  
    });
  });
}

module.exports = {
  compileSass
}