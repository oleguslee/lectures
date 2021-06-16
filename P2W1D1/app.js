const express = require("express");
const { connect } = require("./src/db/config/connect");
const PostModel = require("./src/db/models/post.model");
const morgan = require("morgan");
// console.log(express);

const app = express();
connect();

const PORT = 3000;

app.set("view engine", "hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const allPosts = await PostModel.find();
  res.render("index", { posts: allPosts, title: "My Posts" });
});

app.post("/", async (req, res) => {
  const dataFromClient = req.body;

  const newPost = await PostModel.create(dataFromClient);
  // console.log(newPost);

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
