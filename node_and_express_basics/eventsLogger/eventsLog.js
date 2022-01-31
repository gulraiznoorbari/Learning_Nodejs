const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
const fs = require("fs");
const fsPromise = require("fs/promises");
const path = require("path");

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), "dd/MM/yyyy\tHH:mm:ss")}`;
    const logEvent = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logEvent);
    try {
        if (!fs.existsSync(path.join(__dirname, "logs"))) {
            await fsPromise.mkdir(path.join(__dirname, "logs"));
        }
        await fsPromise.appendFile(path.join(__dirname, "logs", "eventsLog.txt"), logEvent);
    } catch (error) {
        console.log(error);
    }
};

module.exports = logEvents;
