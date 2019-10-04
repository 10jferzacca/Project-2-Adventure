const express = require('express');
const parser = require("body-parser");
const methodOverride = require('method-override');
const hbs= require('hbs');

const app = express();

app.use(methodOverride('_method'));
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));



const adventuresController = require('./controllers/adventures');

app.use("/", adventuresController);


app.listen(3000, () => console.log("Running on port 3000"))