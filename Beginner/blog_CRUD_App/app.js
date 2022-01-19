const express = require("express");
const morgan = require("morgan");

// Initiate Express App:
const app = express();

// connect mongodb:
const db =
    "mongodb+srv://gulraiz:gulraiz@nodejs.udaci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// register view engine:
app.set("view engine", "ejs");

// listen for request on specified port number:
app.listen(3000);

// built-in express middleware for static files:
app.use(express.static("static"))

// morgan: request logging middleware
app.use(morgan("dev"))

// middleware function:
app.use((req, res, next) => {
    console.log("---New Request Made---");
    console.log("Host: ",req.hostname);
    console.log("Path: ",req.path);
    console.log("Method: ",req.method);
    next();
})


// return view:
app.get("/", (req, res) => {
    const blogs = [
        { title: "Lorem, ipsum dolor", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Lorem, ipsum dolor", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Lorem, ipsum dolor", snippet: "Lorem ipsum dolor sit amet consectetur" },
    ];
    res.render("index", { title: "Home", blogs });
});

// middleware function:
app.use((req, res, next) => {
    console.log("---In the next middleware---");
    next();
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

// redirect:
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 page / middleware function:
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
