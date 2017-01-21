const path = require('path');

module.exports = (app, express) => {

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });

};