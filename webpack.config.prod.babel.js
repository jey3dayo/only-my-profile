const webpack = require('webpack');

module.exports = {
  devtool: false,
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
};
