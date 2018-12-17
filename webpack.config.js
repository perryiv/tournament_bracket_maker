
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/* eslint-env node */

var HtmlWebpackPlugin = require ( "html-webpack-plugin" );
var HotModuleReplacementPlugin = require ( "webpack" ).HotModuleReplacementPlugin;

var config = {
  output: {
    path: __dirname + "/build/",
    filename: "tournament_bracket_maker.js"
  },
  resolve: {
    extensions: [ ".js", ".jsx" ]
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  devtool: "source-map",
  entry: "./Source/Main",
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "url-loader?mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules|build)/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    quiet: false,
    host: "localhost",
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin ( {
      template: "node_modules/html-webpack-template/index.ejs",
      title: "Tournament Bracket Maker",
      appMountId: "app",
      inject: false
    } ),
    new HotModuleReplacementPlugin()
  ]
};

console.log ( "In webpack config file: ", __filename );
console.log ( "config = \n", config );

// Export these options.
module.exports = config;
