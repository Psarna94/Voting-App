'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: String,
  author:String,
  options:[String],
  votes:[Number],
  voted_users:[String],
  date:{
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Poll', PollSchema);