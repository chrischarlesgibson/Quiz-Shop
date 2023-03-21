const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //entry: specifies the main file (the entry) of our application which will be the index.js file we created
  entry: "./index.js",
  mode: "development",
  //output: specifies where Webpack will put it's files after bundling and we specify the path and the file name of that Webpack bundle
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  //target: specifies where our app will run

  target: "web",

  /*devServer: specifies our development server settings

port: specifies the port our app will run on once started
static: specifies the directory webpack will use to serve static files
open: automatically open the browser after it had bundled our files
hot: enables webpack Hot module replacement exchanges, adds, or removes modules while an application is running, without a full reload. to improve performance
liveReload: automatically update the app as you make changes */
  devServer: {
    port: "3001",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  //resolve: tells Webpack files to consider when building our app you can specifies files with several extensions
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  //modules: where we specify rules about how Webpack will handle different files when building our app
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  //plugin: where we specify plugins to use with webpack and we will need HTMLWebpackPlugin which will generate html files for our bundles and are twlling it to use our index.html file in the public folder as a template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
