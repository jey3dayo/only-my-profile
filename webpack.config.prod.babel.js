import webpack from 'webpack';

module.exports = {
  devtool: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
