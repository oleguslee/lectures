require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;

const books = [
  {
    id: "222",
    author: "Дж. Р. Р. Толкиен",
    title: "Властелин колец",
    isFavorite: false,
  },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json(books);
});

app.post("/api", (req, res) => {
  const { author, title } = req.body;

  if (author && title) {
    const newBook = {
      id: Date.now(),
      author,
      title,
    };

    books.push(newBook);
    return res.status(201).json(newBook);
  }

  return res.sendStatus(406);
});

app.patch("/api/:id", (req, res) => {
  const id = req.params.id;
  const itemIndex = books.findIndex((el) => String(el.id) === id);
  if (itemIndex === -1) {
    return res.sendStatus(404);
  }
  books[itemIndex].isFavorite = !books[itemIndex].isFavorite;
  return res.json(books[itemIndex]);
});

app.listen(PORT, () => {
  console.log(`success`);
});
