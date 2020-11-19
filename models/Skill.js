const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: String,
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
});

module.exports = mongoose.model("Skill", skillSchema);
