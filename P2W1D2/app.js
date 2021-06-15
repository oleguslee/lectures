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

// app.settings["view engine"] = "hbs";
// console.log(app.settings);

// console.log(__dirname);
console.log(process.env.PWD);
app.set("views", path.join(process.env.PWD, "src", "views"));

app.use(express.urlencoded({ extended: true }));
hbs.registerPartials(path.join(process.env.PWD, "src", "views", "partials"));
app.use(express.static(path.join(process.env.PWD, "public")));

// middleware
app.use((req, res, next) => {
  req.sayHi = "Hi!";
  next();
});

// Обработчики ручек
app.use("/", mainRouter);
app.use("/posts", postsRouter);

// Слушаем сервер
app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
