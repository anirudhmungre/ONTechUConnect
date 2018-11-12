"use strict"

try {
    const PORT = 8080
    const express = require('express')
    const path = require("path")
    const helmet = require('helmet')
    const DDoS = require('dddos')
    const app = express()
    const http = require('http').Server(app)

    app.use(new DDoS({
        maxWeight: 5,
        errorData: {
            "response": 429,
            "message": "GEEZ, that's a few too many requests... slow down."
        }
    }).express())
    app.use(helmet())
    app.use(express.static(path.join(__dirname, 'dist')))
    app.set('port', PORT)
    http.listen(PORT)
} catch (e) {
    console.error(e)
}