// Global Objects

console.log(global);

// setTimeout:
setTimeout(() => {
    console.log("Timeout...");
    clearInterval(int);
}, 3000);

// setInterval:
const int = setInterval(() => {
    console.log("In a interval");
}, 1000);

// for current directory path:
console.log(__dirname);
// for current path including current filename:
console.log(__filename);
