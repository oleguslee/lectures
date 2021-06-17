const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { connect } = require("./src/db/config/connect");
const indexRoutes = require("./src/routes/index.routes");
const blogRoutes = require("./src/routes/blog.routes");

const PORT = 3000;

connect();

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src", "views"));
hbs.registerPartials(path.join(__dirname, "src", "views", "partials"));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.locals.anotherNewTitle = "AAAAAAAAAAA";

app.use((req, res, next) => {
  res.locals.title = "My awesome blog";
  req.app.locals.anotherTitle = "another title";
  console.log(res);
  next();
});

app.use("/", indexRoutes);
app.use("/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
