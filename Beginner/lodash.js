const _ = require("lodash");
// Lodash

// returns random number:
const num = _.random(0, 20);
console.log(num);

// function runs once:
const greet = _.once(() => {
    console.log("Hello World!");
});

greet();
greet();
greet();
