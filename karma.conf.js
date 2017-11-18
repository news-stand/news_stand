// Karma configuration
// Generated on Wed Nov 15 2017 20:18:04 GMT-0800 (PST)
const webpackConfig = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'test/client/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/index.js':['webpack', 'sourcemap'],
      'test/client/**/*.js':['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './app/public/index.html',
          filename: 'index.html',
          inject: 'body',
        }),
      ],
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],

    // reporter options 
    nyanReporter: {
      // suppress the error report at the end of the test run 
      suppressErrorReport: false,
 
      // suppress the red background on errors in the error 
      suppressErrorHighlighting: true, // default is false 
 
      // increase the number of rainbow lines displayed 
      // enforced min = 4, enforced max = terminal height - 1 
      numberOfRainbowLines: 4, // default is 4 
 
      // only render the graphic after all tests have finished. 
      // This is ideal for using this reporter in a continuous 
      // integration environment. 
      renderOnRunCompleteOnly: false // default is false 
    },

    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
