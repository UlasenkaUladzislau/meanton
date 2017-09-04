var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: '../src/index.js',
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js"
    },

    watch: true,

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
      loaders: [
        {
          loader: "babel-loader",
          exclude: /node_modules/,
          // Only run `.js` and `.jsx` files through Babel
          test: /\.jsx?$/,

          // Options to configure babel with
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
        },
      ]
    }
};