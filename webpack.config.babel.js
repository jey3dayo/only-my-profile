import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
  context: __dirname,
  entry: {
    jsx: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass?outputStyle=compressed'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpe?g|png|gif)$/, loader: 'url' },
    ],
  },
  sassLoader: {
    includePaths: [
      './node_modules',
      './node_modules/grommet/node_modules',
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/favicon.jpg' },
    ]),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      favicon: './src/favicon.jpg',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
