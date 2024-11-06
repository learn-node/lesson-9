const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
