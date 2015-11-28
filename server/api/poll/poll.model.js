'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
    name: {type: String,
        required: true},
    author: String,
    options: {
        type: [String],
        required: true
    },
    votes: [Number],
    voted_users: [String],
    date: {
        type: Date,
        default: Date.now
    }
});

PollSchema.path('options')
    .validate(function(options){
       return options.length >= 2
    },'Your poll must contain at least 2 options');

module.exports = mongoose.model('Poll', PollSchema);