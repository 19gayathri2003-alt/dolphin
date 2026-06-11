const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  category: String,
  label: String,
  img: String,
});

module.exports = mongoose.model("Gallery", gallerySchema);