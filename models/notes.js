const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: "User ID is required",
    },

    descr: {
      type: "String",
    },

    categ: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categs",
      required: "Category ID is required",
    },

    tag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tags",
        required: "Tag ID is required",
      },
    ],
  },
  { timestamp: true }
);

const Notes = mongoose.model("notes", notesSchema);
module.exports = Notes;
