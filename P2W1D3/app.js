const express = require("express");
const hbs = require("hbs");
const path = require("path");
const { connect } = require("./src/db/config/connect");
const indexRoutes = require("./src/routes/index.router");
const postsRoutes = require("./src/routes/posts.router");

const PORT = 3000;

const app = express();
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(process.env.PWD, "src", "views"));
hbs.registerPartials(path.join(process.env.PWD, "src", "views", "partials"));

app.use("/", indexRoutes);
app.use("/posts", postsRoutes);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
