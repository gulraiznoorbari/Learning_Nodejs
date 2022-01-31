// import from other files:
const { people } = require("./data");
const data = require("./data");

console.log(people, data.age);

// import external modules:
const os = require("os");
console.log(os.platform(), os.homedir());
