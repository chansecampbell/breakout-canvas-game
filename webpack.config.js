module.exports = {
  context: __dirname + "/js",

  entry: "./app.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

   resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }

};