const mongoose = require('mongoose');

const memberModel = mongoose.model('members', new mongoose.Schema({
  
}));

exports.memberModel = memberModel;
