const { Schema, model } = require("mongoose");

const PostSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("Post", PostSchema);
