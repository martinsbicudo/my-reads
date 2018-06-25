const path = require('path')
  , HtmlWebPackPlugin = require("html-webpack-plugin")

  // CONFIG GLOBAL COMPONENTS
  , { withGlobalComponents } = require("next-global-components")({
    dirname: './src/components'
  })
  , { webpack: globalComponents } = withGlobalComponents()

module.exports = globalComponents({
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
            importLoaders: 1
          }
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["node_modules"],
            sourceMap: true,
            data: "@import './public/scss/main';"
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
}, null)
