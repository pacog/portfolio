const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './src/index.js',

    output: {
      filename: 'index.js',
      path: 'dist',
      publicPath: '/'
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        options: {
          title: 'pacog portfolio'
        }
      })
    ],

    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        // { test: /\.(jpg|jpeg|png|gif|svg)$/, loader: 'file', exclude: /node_modules/ },
        { test: /\.scss$/, loader: "style-loader!css-loader!sass" }
      ]
    }
  }
];
