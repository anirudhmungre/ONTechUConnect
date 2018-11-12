"use strict"
const express = require('express')
let router = express.Router()
const {
    resp
} = require('../components/response')

router.get('/', (req, res) => {
    return res.json(resp.make()
        .setError(null)
        .setResponseCode(200)
        .setMessage("Welcome to the homepage of the api!")
        .setData(null)
    )
})

router.get('/test', (req, res) => {
    return res.json(resp.make()
        .setError(null)
        .setResponseCode(200)
        .setMessage("You\'ve found the test page!")
        .setData({
            "KEY": "VALUE"
        })
    )
})

module.exports = router