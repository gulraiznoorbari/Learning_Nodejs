const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// Initiate Express App:
const app = express();

// connect mongodb:
mongoose
    .connect(
        "mongodb+srv://gulraiz:gulraiz@nodejs.udaci.mongodb.net/nodejs?retryWrites=true&w=majority",
    )
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error));

// register view engine:
app.set("view engine", "ejs");

// built-in express middleware for static files:
app.use(express.static("static"));
// takes all the url encoded data:
app.use(express.urlencoded({ extended: true }));
// morgan: request logging middleware
app.use(morgan("dev"));

// middleware function:
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// return view:
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// redirect:
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// blog routes:
app.use("/blogs", blogRoutes);

// 404 page / middleware function:
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
