import webpack from 'webpack';

module.exports = {
  devtool: false,
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
