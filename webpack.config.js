const path = require('path')
  , HtmlWebPackPlugin = require("html-webpack-plugin")
  , ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        include: __dirname + '/src',
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            camelCase: true,
            modules: true
          }
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["node_modules"],
            sourceMap: true,
            data: "@import './public/scss/global';"
          }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV === 'development'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      Components: path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}
