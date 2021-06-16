const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { connect } = require("./src/db/config/connect");
const hbs = require("hbs");

const mainRouter = require("./src/routes/main.routes");
const postsRouter = require("./src/routes/post.routes");

connect();

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.set("view engine", "hbs");

app.set("views", path.join(process.env.PWD, "src", "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // учим сервер принимать json

hbs.registerPartials(path.join(process.env.PWD, "src", "views", "partials"));
app.use(express.static(path.join(process.env.PWD, "public")));

// Обработчики ручек
app.use("/", mainRouter);
app.use("/posts", postsRouter);

// Слушаем сервер
app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
