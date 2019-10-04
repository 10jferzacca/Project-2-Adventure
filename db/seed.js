const Adventure = require('../models/Adventure');
const seedData = require('./seeds.json');

Adventure.remove({})
    .then(() => {
        return Adventure.collection.insert(seedData);
    })
    .then(() => {
        console.log("Yay! Data");
        process.exit();
    });

