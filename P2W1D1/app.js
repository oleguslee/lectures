const express = require("express");
const morgan = require("morgan");
const { connect } = require("./src/db/config/connect");
const Post = require("./src/db/models/post.model");

const server = express();
// console.log(server);

const PORT = 3000;
connect();

server.set("view engine", "hbs");

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true })); // нужно, чтобы мы могли получить содержимое post-запроса

server.get("/", async (req, res) => {
  const allPosts = await Post.find();
  res.render(`index`, { posts: allPosts });
});

server.post("/", async (req, res) => {
  const dataFromClient = req.body;
  const newPost = await Post.create(dataFromClient);
  console.log(newPost);
  res.redirect(`/`); // POST-запрос надо заканчивать редиректом, но ни в коем случае не рендером
});

server.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
