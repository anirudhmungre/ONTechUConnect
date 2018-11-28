"use strict"
const mysql = require('mysql')
const { logger } = require('./logging')
const { dbconfig } = require('./databaseCred.hide')

class OurSQL {
    constructor() {
        this.connection = mysql.createConnection({
            host: dbconfig.server,
            port: dbconfig.port,
            user: dbconfig.username,
            password: dbconfig.password,
            database: dbconfig.database
        })
        this.connection.on('error', function(error) {
            logger("A db Error has occured: " + JSON.stringify(error), 3)
        })
        logger("Created db connection", 1)
    }
    establishConnection() {
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
    query(sqlStatement, inserts, callback, errCallback) {
        return this.connection.query(sqlStatement, inserts, function (error, results, fields) {
            if (error) {
                logger("Error querrying the db: " + JSON.stringify(error), 3)
                errCallback(error)
            } else {
                callback(results, fields)
            }
        })
    }
    query(sqlStatement, callback, errCallback) {
        return this.connection.query(sqlStatement, function (error, results, fields) {
            if (error) {
                logger("Error querrying the db: " + JSON.stringify(error), 3)
                errCallback(error)
            } else {
                callback(results, fields)
            }
        })
    }
}

exports.OurSQL = OurSQL