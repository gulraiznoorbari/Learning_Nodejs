const blogSchema = require("../model/blog");

// get all blogs:
const all_blogs = (req, res) => {
    blogSchema
        .find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { title: "All Blogs", blogs: result });
        })
        .catch((error) => {
            console.log(error);
        });
};

// get blog details:
const blog_details = (req, res) => {
    const id = req.params.id;
    blogSchema
        .findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: "Blog Details" });
        })
        .catch((error) => console.log(error));
};

// create a blog:
const create_blog = (req, res) => {
    res.render("create", { title: "Create a new blog" });
};

// send POST request to the database:
const send_blog = (req, res) => {
    const blog = new blogSchema(req.body);
    blog.save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((error) => {
            console.log(error);
        });
};

// delete blog (using _id value):
const delete_blog = (req, res) => {
    const id = req.params.id;
    blogSchema
        .findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/all-blogs" });
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = {
    all_blogs,
    blog_details,
    create_blog,
    send_blog,
    delete_blog,
};
