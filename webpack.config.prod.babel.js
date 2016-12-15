import webpack from 'webpack';

module.exports = {
  debug: false,
  devtool: false,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
