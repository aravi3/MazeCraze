const path = require('path');

module.exports = {
  context: __dirname,
  entry: './maze_craze.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'source-map'
};
