var path = require('path');
var file_system = require('fs');
var archiver = require('archiver');

const zipper = (DIRECTORY) => {
  var output = file_system.createWriteStream('build.zip');
  var archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', function () {
    console.log('Build Succesfully');
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);

  // append files from a sub-directory, putting its contents at the root of archive
  archive.directory(DIRECTORY, 'build');

  // append files from a sub-directory and naming it `new-subdir` within the archive
  archive.directory('./assets', 'build');

  archive.finalize();
};

module.exports = { zipper };
