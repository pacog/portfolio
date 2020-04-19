const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    entry: "./src/index.js",

    output: {
      filename: "index.js",
      path: __dirname + "/dist",
      publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body",
        title: "pacog portfolio",
      }),
    ],

    module: {
      rules: [
        { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
        // { test: /\.(jpg|jpeg|png|gif|svg)$/, loader: 'file', exclude: /node_modules/ },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  },
];
