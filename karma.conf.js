const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/**/*.test.js'
    ],

    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },

    // Webpack y Babel permiten que Karma procese imports y JSX de React.
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['babel-plugin-istanbul']
              }
            }
          },
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'test'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      }
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },

    browsers: ['ChromeHeadless'],
    singleRun: true,
    browserNoActivityTimeout: 60000
  });
};
