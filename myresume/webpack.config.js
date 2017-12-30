
var path = require("path");



var PUBLIC_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");




var config = {


    entry: SRC_DIR + "/app/index.js",
    output: {
        path: PUBLIC_DIR + "/app" ,
        // + "/app" ,
        filename: "bundle.js",
        publicPath: "/app"
    },



    module: {
      loaders: [
          {
            test: /\.exec\.js$/,
       use: [ 'script-loader' ],
              include: SRC_DIR,
              loader: "babel-loader",
              query: {
                  presets: ["react", "es2015", "stage-2"]
              }
          },

     {
       test: /\.json$/,
       loader: 'json-loader'
     },


{
// Preprocess 3rd party .css files located in node_modules
test: /\.css$/,

use: ['style-loader', 'css-loader'],

},
{
test: /\.(pdf|jpg|png|gif|svg|ico)$/,
  use: [
      {
          loader: 'url-loader'
      },
  ]
},

// {
//       test: /\.css$/,
//       loader: 'stylesheet-loader'
//     },

{
  {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
   {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
   {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
   {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/},
       loader: 'url-loader'
   },




      ]

    },


};

module.exports = config;
