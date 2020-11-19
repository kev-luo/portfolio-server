const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    repo: String,
    deployed: String,
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
