require('dotenv').config();
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/routes')(app);
require('./startup/logging')();

// listen for connections
const port = process.env.PORT;
app.listen(port, () => {
  winston.info(`listening on port: ${port}...`);
});
