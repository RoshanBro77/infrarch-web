require('dotenv').config();
const mongoose = require('mongoose');

module.exports = function () {
  // db config
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log('Connection to MongoDB successfull...');
  });
};
