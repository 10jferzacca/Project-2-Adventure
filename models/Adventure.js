const mongoose = require("../db/connection");

const AdventureSchema = new mongoose.Schema({
  name: String,
  type: String,
  location: String,
  description: String
});

const Adventure = mongoose.model("Adventure", AdventureSchema);

module.exports = Adventure;