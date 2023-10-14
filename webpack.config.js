const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'; 
const target = devMode ? 'web' : 'browserslist';
const devtool = 'source-map';

module.exports = {
  mode,
  target,
  devtool,
  entry: [
    path.resolve(__dirname, './image-galery/src/components/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './image-galery/dist'),
    clean: true,
    filename: '[name].[contenthash:4].js',
    // assetModuleFilename: 'assets/[name][ext]',
    publicPath: '',
    assetModuleFilename: (pathData) => {
      // pathData is object
      const filepathStartIndex = path
        // path is object 
        // path.dirname('folder1/folder2/image.png') => folder1/folder2;
        .dirname(pathData.filename)
        // path.posix.sep === separator for path parts in current system
        .split(`${path.posix.sep}`)
        // desired folder for path start
        .indexOf('src');
        
      const filepath = path
        // pathData.filename is current full path from webpack.config.js
        .dirname(pathData.filename)
        // path.posix.sep === / in windows
        .split(`${path.posix.sep}`)
        .slice(filepathStartIndex)
        .join(`${path.posix.sep}`);
      return `${filepath}${path.posix.sep}[name].[hash:4][ext][query]`;
    },
  },
  devServer: {
    port: 8080,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './image-galery/src/components/index.html',
      // inject: 'head', 
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: 'asset/resource',
      },
    ],
  },
}