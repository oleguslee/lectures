const express = require("express");
const Post = require("../db/models/post.model");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index");
});
router.get("/info", async (req, res) => {
  res.render("info");
});
router.get("/contacts", async (req, res) => {
  res.render("contacts");
});

module.exports = router;
