"use strict"
const {
    logger,
    logMiddle
} = require('./components/logging')
try {
    logger("Starting server", 1)
    const PORT = 1337
    const express = require('express')
    const path = require("path")
    const bodyParser = require('body-parser')
    const helmet = require('helmet')
    const DDoS = require('dddos')
    const app = express()
    const http = require('http').Server(app)
    logger("Loading modules", 1)
    const {
        cors
    } = require('./components/cors')
    logger("Loading routes", 1)
    const index = require('./routes/index')
    const api = require('./routes/api')
    logger("Setting up middleware", 1)
    app.use(logMiddle())
    app.use(cors())
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
    logger("Adding routes", 1)
    app.set('port', PORT)
    app.use('/', index)
    app.use('/v1', api)

    http.listen(PORT)
    logger("Listening on port " + PORT, 1)
    logger("Server started successfully", 1)
} catch (e) {
    logger('An Error has occured!' + e, 3)
}