require("dotenv").config();
const cors = require("cors");
const express = require("express");
const Post = require("./src/db/models/post.model");
const { connect } = require("./src/db/config/connect");

const PORT = process.env.PORT ?? 3001;

connect();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  Post.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
});

app.post("/api", (req, res) => {
  Post.create(req.body)
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => res.sendStatus(403));
});

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
