require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT ?? 3000;

const booksList = [
  {
    id: "2222",
    title: "Rotten kappchen",
    author: "Brueder Grimm",
    isFavorite: false,
  },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json(booksList);
});

app.post("/api", (req, res) => {
  const { title, author } = req.body;

  if (title && author) {
    const newBook = {
      title,
      author,
      id: Date.now(),
    };

    booksList.push(newBook);
    res.json(newBook);
  }

  res.sendStatus(403);
});

app.patch("/api/:id", (req, res) => {
  const id = req.params.id;
  const itemIndex = booksList.findIndex((el) => String(el.id) === id);
  if (itemIndex === -1) {
    return res.sendStatus(404);
  }
  booksList[itemIndex].isFavorite = !booksList[itemIndex].isFavorite;
  return res.json(booksList[itemIndex]);
});

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
