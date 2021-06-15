const express = require("express");
const Post = require("../db/models/post.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find().sort({ _id: -1 });
  res.render("posts", { posts: allPosts });
});

router.post("/add", async (req, res) => {
  const dataFromClient = req.body;
  await Post.create(dataFromClient);

  res.redirect("/posts");
});

router.get("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const currentPost = await Post.findById(postId);
    if (currentPost) return res.json(currentPost);
    return res.redirect("/");
  } catch (err) {
    return res.redirect("/");
  }
});

module.exports = router;
