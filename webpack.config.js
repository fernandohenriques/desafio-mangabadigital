var Babili = require("babili-webpack-plugin");;
var isProd = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "public/js/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: isProd ?  [new Babili()] : []
}
