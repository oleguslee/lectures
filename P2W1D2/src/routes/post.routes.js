const { Router } = require("express");
const Post = require("../db/models/post.model");

const router = Router();

router.get("/", async (req, res) => {
  // /posts
  const allPosts = await Post.find();
  res.render("posts", { posts: allPosts });
});

router.post("/add", async (req, res) => {
  // /posts/add
  const data = req.body;
  await Post.create(data);

  res.redirect("/posts");
});

router.get("/some", (req, res) => {
  const hi = req.sayHi;
  console.log(hi);
  res.send(hi);
});

router.get("/:idPost", async (req, res) => {
  const currentId = req.params.idPost;
  const currentPost = await Post.find({ title: currentId });
  console.log(req.params);
  res.json({ post: currentPost });
});

module.exports = router;
