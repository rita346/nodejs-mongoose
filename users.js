const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: "String",
    required: "email is required",
    trim: true,
    unique: true,
  },

  password: {
    type: "String",
    required: "pass is required",
    trim: true,
  },
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
