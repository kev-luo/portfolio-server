const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
