const path = require('path');
// So this line apparently requires the 'Path'
// module, which provides utilities for working with file
// and directory paths

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

// Module.exports is the object reference
// that gets returned from require() calls
// it is automatically created by Node.js
// it is a plain JS object
// empty by default
// can attach public methods to it
// or replace it with our own custom object

// In this case:
// We replaced with our own custom object
// with values specifying entry and output
// parameters, aided by the path module
