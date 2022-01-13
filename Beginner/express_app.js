const express = require("express");

// Initiate Express App:
const app = express();

// listen for request on specified port number:
app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});
