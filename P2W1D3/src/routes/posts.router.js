const { Router } = require("express");
const Post = require("../db/models/post.model");
const router = Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find().sort({ _id: -1 });
  res.render("posts", { allPosts });
});

router.post("/add", async (req, res) => {
  const dataFromClient = req.body;

  const newPost = await Post.create(dataFromClient);

  res.json(newPost);
});

router.delete("/:id", async (req, res) => {
  const postId = req.params.id;
  console.log(postId);
  try {
    await Post.findOneAndDelete({ _id: postId });
    console.log("success");
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});
module.exports = router;
