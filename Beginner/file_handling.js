const fs = require("fs");

// read file:
fs.readFile("./docs/test.txt", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});

console.log("Last Line");

// write file:
fs.writeFile("./docs/test.txt", "Hello from the main script", () => {
    console.log("Data has been written in file.");
});

// if file doesn't exist it will create one.
fs.writeFile("./docs/sample.txt", "File creation was done at runtime", () => {
    console.log("File Created and Data has been written in file.");
});

// create/remove directories:
if (fs.existsSync("./random")) {
    // console.log("Folder already exists!");
    fs.rmdir("./random", (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Folder Removed");
        }
    });
} else {
    fs.mkdir("./random", (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Folder Created");
        }
    });
}

// delete file:
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("File Deleted");
        }
    });
}
