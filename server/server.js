const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || 1337;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, function () {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Dev Server listening on port: 8080');
    console.log('API Server running on port: ' + port);
  } else {
  console.log('Server listening on port: ' + port);
  }
});