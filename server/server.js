const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || 1337;

app.use(express.static('public'));

require('./config/routes.js')(app, express);

app.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
