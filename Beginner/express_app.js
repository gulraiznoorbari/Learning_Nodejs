const express = require("express");

// Initiate Express App:
const app = express();

// register view engine:
app.set("view engine", "ejs");

// listen for request on specified port number:
app.listen(3000);

// return view:
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

// redirect:
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 page / middleware function:
app.use((req, res) => {
    res.render("404");
});
