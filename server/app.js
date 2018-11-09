"use strict"
const PORT = 1337
const express = require('express')
const app = express()
const path = require("path")
const bodyParser = require('body-parser')
const helmet = require('helmet')
const DDoS = require('dddos')
const http = require('http').Server(app)
const { cors } = require('./components/cors')
const {
    logger,
    logMiddle
} = require('./components/logging')

const api = require('./routes/api')

// Server setup
app.use(logMiddle)
app.use(cors)
app.use(new DDoS({
    maxWeight: 5,
    errorData: {
        "response": 429,
        "message": "GEEZ, that\'s a few too many requests... slow down."
    }
}).express())
app.use(helmet())
app.use(bodyParser.json({
    limit: '512mb'
}))
app.use(bodyParser.urlencoded({
    limit: '512mb',
    extended: true
}))
app.set('port', PORT)

// Server files in public
app.use(express.static(path.join(__dirname, "public")))

// Use API routing
app.use('/api', api)

// Default page
app.get('/', (req, res) => {
    res.json({
        "response": 200,
        "message": "wut lol"
    })
})
app.get('*', (req, res) => {
    res.json({
        "response": 404,
        "error": "Not Found",
        "message": "looks like you are lost..."
    })
});

// Start server and listen on port
try {
    logger("Starting server", 1)
    http.listen(PORT)
    logger("Listening on port " + PORT, 1)
    logger("Server started successfully", 1)
} catch (e) {
    logger('An Error has occured!' + e, 3)
}