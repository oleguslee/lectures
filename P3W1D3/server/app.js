const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT ?? 3000;

const DB = [
  {
    id: "222",
    author: "Дж. Р. Р. Толкиен",
    title: "Властелин колец",
    isFavorite: false,
  },
  {
    id: "333",
    author: "К. Кизи",
    title: "Цветы для Элджернона",
    isFavorite: false,
  },
  {
    id: "444",
    author: "Э. М. Ремарк",
    title: "Жизнь взаймы",
    isFavorite: false,
  },
];

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => res.json(DB));

app.get("/api/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = DB.users.find((el) => user.id === id);
    if (user) {
      return res.json(user);
    }
    return res.sendStatus(404);
  }
  return res.status(418);
});

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
