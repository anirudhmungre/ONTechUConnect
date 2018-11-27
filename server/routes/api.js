"use strict"
const express = require('express')
const router = express.Router()
const {resp} = require('../components/response')
const sql = new OurSQL()
const con = sql.getConnection()

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

router.post('/auth', (req, res) => {
    let post = {
        sID: req.body.user,
        pass: req.body.pass
    }
    sql.query('SELECT password FROM Student WHERE sID=' + con.escape(post.sID) + ')',
        (results, fields) => {
            if (results == post.pass){
                return res.json(resp.make()
                .setMessage("Query successful!")
                .setResponseCode(200)
                .setData({
                    auth: true
                })
                )
            }
            else{
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(200)
                    .setMessage("Incorrect")
                    .setData({
                        auth: false
                    })
                )
            }
        }, (error) => {
            if (error) {
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(500)
                    .setMessage("There was an error :(")
                )
            }
        })
    )
})

module.exports = router