const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  repo: String,
  deployed: String,
})

module.exports = mongoose.model("Project", projectSchema);