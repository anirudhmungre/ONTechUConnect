"use strict"
let messageType = ["LOG", "INFO", "WARNING", "ERROR"]

function log(message = "", type = 0, time = true) {
  message = "[" + messageType[type] + "] " + (time ? "[" + (new Date()).toLocaleTimeString() + "] " : "") + message
  if (type === 3) {
    console.error(message)
  } else {
    console.log(message)
  }
}

function loggingMiddleware() {
  return (req, res, next) => {
    let message = req.protocol + " " + req.method + " " + req.path
    log(message, 0, true)
    next()
  }
}

exports.logger = log
exports.logMiddle = loggingMiddleware