const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  /**
   * 開發環境
   */
  mode: "development",
  entry: "./src/index.js",
  /**
   * 我们将使用 inline-source-map 选项，这有助于解释说明示例意图（此配置仅用于示例，不要用于生产环境
   */
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/, 
        use: ["babel-loader","source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "管理输出",
      template: './template/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
