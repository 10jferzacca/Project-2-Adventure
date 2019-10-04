const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adventure');

mongoose.Promise = Promise;

module.exports = mongoose;

