import HtmlWebpackPlugin from 'html-webpack-plugin';

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
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpe?g|png|gif)$/, loader: 'url?limit=10000' },
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
    extensions: ['', '.js', '.jsx', '.json'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
