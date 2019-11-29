const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  
  mode: "development",
  entry: "./src/index.ts",
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
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  resolve: {
    extensions: [".json", ".ts", ".tsx", ".js"]
  },
  
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it use publicPath in webpackOptions.output
          //     // publicPath: "../"
          //   }
          // },
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"],
        enforce: "pre"
      },
      { test: /\.ts|tsx?$/, loader: "ts-loader" },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader", // compiles Less to CSS
            // options: {
            //   sourceMap: true
            // }
          },
        ]
      }
    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      title: "ee",
      template: "./template/index.html",
      inject: true
    }),

    new webpack.BannerPlugin({
      banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new webpack.HotModuleReplacementPlugin()
  ]
};
