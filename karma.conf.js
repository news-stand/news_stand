// Karma configuration
// Generated on Wed Nov 15 2017 20:18:04 GMT-0800 (PST)
const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // using the webpack config file
    webpack: webpackConfig,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js':['webpack'],
      'test/**/*.js':['webpack'],
      'test/**/*Spec.js':['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],

    // reporter options 
    nyanReporter: {
      // suppress the error report at the end of the test run 
      suppressErrorReport: false, // default is false 
 
      // suppress the red background on errors in the error 
      // report at the end of the test run 
      suppressErrorHighlighting: true, // default is false 
 
      // increase the number of rainbow lines displayed 
      // enforced min = 4, enforced max = terminal height - 1 
      numberOfRainbowLines: 4, // default is 4 
 
      // only render the graphic after all tests have finished. 
      // This is ideal for using this reporter in a continuous 
      // integration environment. 
      renderOnRunCompleteOnly: false // default is false 
    },

    // configuring [spec] reporter
    // specReporter: {
    //   maxLogLines: 5,         // limit number of lines logged per test 
    //   suppressErrorSummary: true,  // do not print error summary 
    //   suppressFailed: true,  // do not print information about failed tests 
    //   suppressPassed: true,  // do not print information about passed tests 
    //   suppressSkipped: true,  // do not print information about skipped tests 
    //   showSpecTiming: true // print the time elapsed for each spec 
    // },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
