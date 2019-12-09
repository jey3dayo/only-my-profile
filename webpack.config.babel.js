import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

const config = process.env.NODE_ENV === 'production'
  ? require('./webpack.config.prod.babel.js')
  : require('./webpack.config.dev.babel.js');

const common = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(jpe?g|png|gif)$/, loader: 'url-loader?limit=10000' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      favicon: './src/favicon.jpg',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = merge(common, config);
