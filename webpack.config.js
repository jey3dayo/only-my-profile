module.exports = {
  context: __dirname,
  entry: {
    jsx: './src/index.jsx',
    jpg: './src/icon.jpg',
    css: './src/main.css',
    html: './src/index.html',
  },

  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'file?name=[name].[ext]' },
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=compressed' },
      { test: /\.(jpg|png)$/, loader: 'file?name=img/[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
    ],
  },
  sassLoader: {
    includePaths: [
      './node_modules',
      './node_modules/grommet/node_modules',
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
