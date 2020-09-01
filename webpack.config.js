const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: __dirname + "/src/js/scripts.js",
  mode: "none",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.html/,
        loader: "raw-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
        use: [
          {
            loader: "file-loader?name=./fonts/[name].[ext]",
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    contentBase: "./src",
    port: 7700,
  },
  performance : {
    hints : false
} 
};
