const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // setting response header:
    res.setHeader("Content-Type", "text/html");
    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    // sending a html file:
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(8080, "localhost", () => {
    console.log("Listening for requests on port 8080");
});

/* 
    Status Codes:
        - 200 = OK
        - 301 = Resource Moved
        - 404 = Not Found
        - 500 = Internal Server Error
*/
