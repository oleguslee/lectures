const { Router } = require("express");
const { findByIdAndUpdate } = require("../db/models/post.model");
const Post = require("../db/models/post.model");

const router = Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find().sort({ _id: -1 });
  res.render("posts", { posts: allPosts });
});

router.post("/add", async (req, res) => {
  const data = req.body;
  const newPost = await Post.create(data);

  res.json(newPost);
});

router.patch("/:id", async (req, res) => {
  const { id: postId } = req.params;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { $inc: { likes: 1 } },
    { new: true }
  );

  console.log(updatedPost);
  res.json(updatedPost);
});

router.delete("/:id", async (req, res) => {
  const { id: postId } = req.params;

  try {
    await Post.findByIdAndRemove(postId);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;
