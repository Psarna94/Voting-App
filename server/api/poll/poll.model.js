'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
    name: {type: String,
        required: true},
    author: String,
    options: {type: [String],
        required: true},
    votes: [Number],
    voted_users: [String],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Poll', PollSchema);