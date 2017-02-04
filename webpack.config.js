const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
var config = {
  context: __dirname + '/web', // `__dirname` is root of project and `src` is source
  entry: {
    app: './static/js/app.js',
  },
  output: {
    path: __dirname + '/priv/static', // `dist` is the destination
    filename: '/js/[name].bundle.js',
  },
  module: {
    rules: [
            {
            test: /\.js$/, //Check for all js files
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }]
            },
            {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: [
                        'css-loader',
                        'sass-loader',
                        ]
                })
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
     devtool: "eval-source-map", // Default development sourcemap
     plugins: [
        new ExtractTextPlugin({filename:"css/app.css"}),
        new CopyWebpackPlugin([{ from: "./static/assets" }])
    ]

};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";

  // Can do more here
  // JSUglify plugin
  // Offline plugin
  // Bundle styles seperatly using plugins etc,
}

module.exports = config;