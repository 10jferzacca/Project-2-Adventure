const express = require('express');
const parser = require("body-parser");
const methodOverride = require('method-override');
const hbs= require('hbs');

const app = express();


app.use(methodOverride('_method'));
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use('/assets', express.static('public'))


const adventuresController = require('./controllers/adventures');

app.use("/", adventuresController);


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});