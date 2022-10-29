const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  descr: {
    type: "String",
  },
});

const Tags = mongoose.model("tags", tagSchema);
module.exports = Tags;
