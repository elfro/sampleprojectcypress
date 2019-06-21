const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};

module.exports = (on, config) => {
  const options = {
    webpackOptions
  };
  on('file:preprocessor', wp(options));

  // modify basic config options
  config.defaultTimeoutInterval = 6000;
  config.baseUrl = 'http://dev.valor.com';

  // modify env variable value
  config.env.ENVIRONMENT = 'dev';

  // return config
  return config;
};
