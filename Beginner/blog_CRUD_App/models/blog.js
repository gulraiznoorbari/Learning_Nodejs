const mongoose = require("mongoose");
const schema = mongoose.Schema;

// building the schema/data storage structure for the database:
const blogSchema = new schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

// connecting the schema with the Database using models:
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
