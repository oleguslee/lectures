const { Schema, model } = require("mongoose");

const PostSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
});

module.exports = model("Post", PostSchema);
