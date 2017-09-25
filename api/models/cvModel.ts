'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cvSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your name'
  },
  designation: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'rejected', 'hired']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('cvs', cvSchema);
