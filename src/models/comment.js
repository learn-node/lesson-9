const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model("Comment", commentSchema);
