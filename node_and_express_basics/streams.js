const fs = require("fs");

// Read stream:
const readStream = fs.createReadStream("./docs/readStream.txt", { encoding: "utf-8" });
// Write stream:
const writeStream = fs.createWriteStream("./docs/writeStream.txt");

// on() function registers an event handler for a specific event:
readStream.on("data", (chunk) => {
    writeStream.write("\nNew Chunk\n");
    writeStream.write(chunk);
});

/* pipe() function: Pipes can be used to connect multiple streams together. One of the most common example is to pipe the read and write stream together for the transfer of data from one file to the other.
 */
readStream.pipe(writeStream);
