const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adventure', () => {
    console.log("We connected!!!");
});

mongoose.Promise = Promise;

module.exports = mongoose;

