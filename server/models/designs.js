const mongoose = require('mongoose');

const designModel = mongoose.model('designs', new mongoose.Schema({

}));

exports.designModel = designModel;
