const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogSchema = require("./models/blog");

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

// save a blog:
app.get("/add-blog", (req, res) => {
    const blog = new blogSchema({
        title: "new blog 2",
        snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        body: "Lorem ipsum dolor sit",
    });
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        });
});

// return view:
app.get("/", (req, res) => {
    res.redirect("/all-blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// redirect:
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

// get all blogs:
app.get("/all-blogs", (req, res) => {
    blogSchema
        .find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { title: "All Blogs", blogs: result });
        })
        .catch((error) => {
            console.log(error);
        });
});

// send POST request (send data to the database):
app.post("/blogs", (req, res) => {
    const blog = new blogSchema(req.body);
    blog.save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((error) => {
            console.log(error);
        });
});

app.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    blogSchema
        .findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: "Blog Details" });
        })
        .catch((error) => console.log(error));
});

// 404 page / middleware function:
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
