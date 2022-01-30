const logEvents = require("./eventsLog");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("log", (message) => {
    logEvents(message);
});

eventEmitter.emit("log", "Log event emitted!");
