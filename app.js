const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
require("dotenv").config({ path: ".env" });

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());

const authRoute = require("./router/auth");
const categRoute = require("./router/categ");
const tagRoute = require("./router/tag");
const notesRoute = require("./router/notes");

//const autho = require("./middleware/authm");

//app.use(autho);

app.use(authRoute);
app.use(categRoute);
app.use(tagRoute);
app.use(notesRoute);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(console.log("Connected to db"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server started on PORT : ", process.env.PORT);
});
