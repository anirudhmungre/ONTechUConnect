"use strict"
const mysql = require('mysql')
const { logger } = require('./logging')
const {
    dbconfig
} = require('./databaseCred.hide')

class OurSQL {
    constructor() {
        this.connection = mysql.createConnection({
            host: dbconfig.host,
            port: dbconfig.port,
            user: dbconfig.username,
            password: dbconfig.password,
            database: dbconfig.databse
        })
        this.connection.on('error', function(error) {
            logger("A db Error has occured: " + JSON.stringify(error), 3)
        })
        logger("Created db connection", 1)
    }
    establishConnection(callback) {
        logger("Opening db connection", 1)
        this.connection.connect(function (error) {
            if (error) {
                logger("Error connecting to the db: " + JSON.stringify(error), 3)
            } else {
                logger("db connection successful", 1)
            }
        })
    }
    getConnection() {
        return this.connection
    }
    quitConnection() {
        logger("Closing db connection", 1)
        this.connection.end(function() {

        })
    }
    query(sqlStatement, inserts, callback) {
        return this.connection.query(sqlStatement, inserts, function (error, results, fields) {
            if (error) {
                logger("Error querrying the db: " + JSON.stringify(error), 3)
            } else {
                callback(results, fields)
            }
        })
    }
}

exports.OurSQL = OurSQL