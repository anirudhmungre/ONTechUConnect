"use strict"
const express = require('express')
const {
    resp
} = require('../components/response')

let router = express.Router()

router.get('/', (req, res) => {
    return res.json(resp.make()
        .setResponseCode(200)
        .setMessage("welcome")
    )
})
router.get('*', (req, res) => {
    return res.json(resp.make()
        .setError("Page not found...")
        .setResponseCode(404)
        .setMessage("looks like you might be lost...")
    )
});

module.exports = router