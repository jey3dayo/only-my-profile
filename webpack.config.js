module.exports = {
  context: __dirname,
  entry: {
    jsx: './src/index.jsx',
    css: ['./src/main.css'],
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
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: './.eslintrc',
  },
};
