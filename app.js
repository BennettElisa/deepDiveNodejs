const EventEmitter = require("events");
const emmitter = new EventEmitter(); // object
const log = require("./logger");
// const os = require("os");

// Register a listener
emmitter.on("messageLogged", envArg => {
  console.log("listener called", envArg);
});

log("message");
