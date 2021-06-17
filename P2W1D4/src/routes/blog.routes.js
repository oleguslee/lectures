const { Router, response } = require("express");
const Post = require("../db/models/post.model");

const router = Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find().sort({ _id: -1 });
  res.render("blog", { allPosts });
});

router.post("/add", async (req, res) => {
  const dataFromClient = req.body;
  console.log(dataFromClient);
  const newPost = await Post.create(dataFromClient);

  res.json(newPost);
});

router.patch("/:id", async (req, res) => {
  // req.params.id
  const { id: postId } = req.params;

  try {
    const currentPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { like: 1 } },
      { new: true }
    );
    console.log(currentPost);
    res.json({ likes: currentPost.like });
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
