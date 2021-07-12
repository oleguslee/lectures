const { Schema, model } = require("mongoose");

const BookSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = model("Book", BookSchema);
