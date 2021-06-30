require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;

const people = [
  {
    id: "222",
    userName: "John",
    phone: "8 999 999 99 99",
  },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json(people);
});

app.post("/api", (req, res) => {
  const { userName, phone } = req.body;
  console.log(userName);

  if (userName && phone) {
    const newPeople = {
      id: Date.now(),
      userName,
      phone,
    };

    people.push(newPeople);

    return res.status(201).json(newPeople);
  }

  return res.sendStatus(406);
});

app.listen(PORT, () => {
  console.log(`success`);
});
