const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogControllers");

// get all blogs:
router.get("/", blogController.all_blogs);
// create a blog:
router.get("/create", blogController.create_blog);
// get blog details:
router.get("/:id", blogController.blog_details);
// send POST request (send data to the database):
router.post("/", blogController.send_blog);
// delete blog:
router.delete("/:id", blogController.delete_blog);

module.exports = router;
