const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { TestPlugin } = require("./webpack-test-plugin/webpack-test-plugin");
// const NpmInstallPlugin = require("npm-install-webpack-plugin");
const ROOT_PATH = process.cwd();
const SRC_PATH = path.join(ROOT_PATH, "src");
const devMode = process.env.NODE_ENV !== "production";

var alias = {
  react: "react",
  src: SRC_PATH,
};

module.exports = {
  mode: devMode ? "development" : "production",

  entry: {
    vendor: ["react", "react-dom", "antd"],
    app: "./src/index.ts",
  },

  /**
   * 我们将使用 inline-source-map 选项，这有助于解释说明示例意图（此配置仅用于示例，不要用于生产环境
   */
  devtool: "inline-source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js", // 针对 entry js 的名称
    chunkFilename: "[name].[chunkhash:8].js",
  },

  resolve: {
    extensions: [".json", ".ts", ".tsx", ".js"],
    alias: alias,
  },

  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },

    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          output: {
            comments: /@license/i,
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
        chunkFilter: (chunk) => {
          // Exclude uglification for the `vendor` chunk
          if (chunk.name === "vendor") {
            return false;
          }

          return true;
        },
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: "../"
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "source-map-loader",
          {
            loader: require.resolve("ehome-react-skeleton"), // 在babel-loader之前配置ehome-react-skeleton
          },
        ],
        enforce: "pre",
      },
      { test: /\.ts|tsx?$/, loader: "ts-loader" },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: "../",
            },
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true,
            },
          },

          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new TestPlugin(),

    // new NpmInstallPlugin(),

    devMode &&
      new webpack.HotModuleReplacementPlugin({
        // Options...
      }),

    /**
     */
    new webpack.AutomaticPrefetchPlugin(),

    new HtmlWebpackPlugin({
      title: "ee",
      template: "./template/index.html",
      inject: true,
    }),

    // string
    new webpack.BannerPlugin({
      banner: "hello world",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
};
