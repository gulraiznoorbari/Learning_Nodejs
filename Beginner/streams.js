const fs = require("fs");

// Read stream:
const readStream = fs.createReadStream("./docs/readStream.txt", { encoding: "utf-8" });
// Write stream:
const writeStream = fs.createWriteStream("./docs/writeStream.txt");

// readStream.on("data", (chunk) => {
//     console.log("-------New Chunk of Data---------");
//     console.log(chunk);
//     writeStream.write("\nNew Chunk\n");
//     writeStream.write(chunk);
// });

// piping:
readStream.pipe(writeStream);
