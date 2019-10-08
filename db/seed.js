const Adventure = require('../models/Adventure');
const seeds = require('./seeds.json');

Adventure.deleteMany({})
    .then(() => {
        return Adventure.insertMany(seeds);
    })
    .then(() => {
        console.log("Yay! Data");
        process.exit();
    });

