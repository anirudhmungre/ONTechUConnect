let express = require('express')
let router =  express.Router()

router.get('/', (req, res) => {
    return res.json({"response":200, "message": "Welcome to the homepage of the api!"})
})

module.exports = router