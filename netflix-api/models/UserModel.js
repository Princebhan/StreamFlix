const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    likedMovies: Array,
    watchedMovies: Array,
  });
  
  module.exports = mongoose.model("users", userSchema);