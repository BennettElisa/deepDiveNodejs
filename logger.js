const EventEmitter = require("events");
const emmitter = new EventEmitter(); // object

let url = "http://mylogger.io/log";

function log(message) {
  console.log(message);
  // rasise an event
  emmitter.emit("messageLogged", { id: 1, url: "http://" });
}

module.exports = log;
