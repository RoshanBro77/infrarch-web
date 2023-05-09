require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const portfolio = require('./routes/portfolio');
const houses = require('./routes/houses');
const member = require('./routes/members');
const testimonal = require('./routes/testimonal');
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use('/api/portfolio', portfolio);
app.use('/api/house', houses);
app.use('/api/member', member);
app.use('/api/testimonal', testimonal);

// db config
mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Connection to MongoDB successfull.');
});

// listen for connections
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port: ${port}...`);
});
