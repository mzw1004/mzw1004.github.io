const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
