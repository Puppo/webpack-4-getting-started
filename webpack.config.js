const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index",
    profile: "./src/profile"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "/dist"
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({})],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  }
};
