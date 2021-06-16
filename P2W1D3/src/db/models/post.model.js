const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  picture: {
    type: String,
    reauired: true,
  },
  title: {
    type: String,
    reauired: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Post", postSchema);
