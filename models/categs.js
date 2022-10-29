const mongoose = require("mongoose");

const CategSchema = new mongoose.Schema({
  descr: {
    type: "String",
    required: true,
  },
});

const Categs = mongoose.model("categs", CategSchema);
module.exports = Categs;
