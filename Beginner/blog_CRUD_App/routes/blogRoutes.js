const express = require("express");
const router = express.Router();
const blogSchema = require("../model/blog");

// get all blogs:
router.get("/", (req, res) => {
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

// create a blog:
router.get("/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    blogSchema
        .findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: "Blog Details" });
        })
        .catch((error) => console.log(error));
});

// send POST request (send data to the database):
router.post("/", (req, res) => {
    const blog = new blogSchema(req.body);
    blog.save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((error) => {
            console.log(error);
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    blogSchema
        .findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/all-blogs" });
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;
