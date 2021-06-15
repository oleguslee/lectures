const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { connect } = require("./src/db/config/connect");
const postRouter = require("./src/routes/post.router");
const indexRouter = require("./src/routes/index.router");

const app = express();
connect();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, "public")));

app.set("view engine", "hbs");
// app.settings["view engine"] = "dddddd";

app.set("views", path.join(process.env.PWD, "src", "views"));
// console.log(app);
hbs.registerPartials(path.join(process.env.PWD, "src", "views", "partials"));

app.use("/", indexRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
