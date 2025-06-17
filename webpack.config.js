const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // disable evals and dev behaviors
  devtool: 'source-map', // generates external .map files, no inline evals

  entry: {
    background: './background/index.js',
    sidepanel: './sidepanel/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
    environment: {
      arrowFunction: false,
      dynamicImport: false,
    }
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'copies/manifest.json', to: 'manifest.json' },
        { from: 'copies/content-script.js', to: 'content-script.js' },
        { from: 'copies/inject.js', to: 'inject.js' },
        { from: 'copies/sidepanel.html', to: 'sidepanel.html' },
        { from: 'copies/assets/icon.png', to: 'icon.png' },
        { from: 'copies/assets', to: 'assets' },
        { from: 'copies/css', to: 'css' },
      ]
    })
  ]
};
