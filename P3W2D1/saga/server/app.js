require("dotenv").config();
const cors = require("cors");
const express = require("express");
const Book = require("./src/db/models/book.model");
const { connect } = require("./src/db/config/connect");

const PORT = process.env.PORT ?? 3001;

connect();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  Book.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(404));
});

app.post("/api", (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => res.sendStatus(403));
});

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
