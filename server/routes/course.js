"use strict"
const express = require('express')
const { resp } = require('../components/response')
const { OurSQL } = require('../components/oursql')
let router = express.Router()
let sql = new OurSQL()
let con = sql.getConnection()

router.post('/student/ecourses', (req, res) => {
    let post = {
        sID: req.body.sid 
    }
    sql.query(`SELECT * FROM coursesEnrolled WHERE sID= ${con.escape(post.sID)}`,
        (results, fields) => {
            return res.json(resp.make()
                .setMessage("Query successful!")
                .setResponseCode(200)
                .setData(results)
            )
        }, (error) => {
            if (error) {
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(500)
                    .setMessage("There was an error :(")
                )
            }
    })
})

router.post('/admin/instructors', (req, res) => {
    let post = {
        scID = req.body.scid
    }
    sql.query(`SELECT * FROM courseProfs WHERE schoolID= ${con.escape(post.scID)}`,
        (results, fields) => {
            if (admin){
                return res.json(resp.make()
                    .setMessage("Query successful Admin!")
                    .setResponseCode(200)
                    .setData({fields, table: results})
                )
            }
            else{
                return res.json(resp.make()
                    .setMessage("You don't have access to this information")
                    .setResponseCode(200)
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
})


router.post('/student/depcourses', (req, res) => {
    let post = {
        scID: req.body.scid,
        depID: req.body.depid
    }
    sql.query(`SELECT * FROM coursesInDepartment WHERE schoolID= ${con.escape(post.scID)}`,
        (results, fields) => {
            return res.json(resp.make()
                .setMessage("Query successful!")
                .setResponseCode(200)
                .setData(results)
            )
        }, (error) => {
            if (error) {
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(500)
                    .setMessage("There was an error :(")
                )
            }
    })
})


router.post('/admin/school/ontechu/course/total', (req, res) => {
    let post = {
        admin: req.body.admin,
    }
    sql.query("SELECT * FROM numStudentsPerCourse",
        (results, fields) => {
            if (admin){
                return res.json(resp.make()
                    .setMessage("Query successful Admin!")
                    .setResponseCode(200)
                    .setData({fields, table: results})
                )
            }
            else{
                return res.json(resp.make()
                    .setMessage("You don't have access to this information")
                    .setResponseCode(200)
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
})


router.post('/admin/school/active', (req, res) => {
    let post = {
        admin: req.body.admin
    }
    sql.query("SELECT * FROM activeSchools",
        (results, fields) => {
            if (admin) {
                return res.json(resp.make()
                    .setMessage("Query successful Admin!")
                    .setResponseCode(200)
                    .setData({fields, table: results})
                )
            }
            else{
                return res.json(resp.make()
                    .setMessage("You don't have access to this information")
                    .setResponseCode(200)
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
})


router.post('/admin/allstudents', (req, res) => {
    let post = {
        admin: req.body.admin,
    }
    sql.query("SELECT * FROM allStudents",
        (results, fields) => {
            if (admin){
                return res.json(resp.make()
                    .setMessage("Query successful Admin!")
                    .setResponseCode(200)
                    .setData({fields, table: results})
                )
            }
            else{
                return res.json(resp.make()
                    .setMessage("You don't have access to this information")
                    .setResponseCode(200)
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
})


router.post('/student/activecourses', (res, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM activeCourses WHERE schoolID = ${con.escape(post.scID)}`,
        (results, fields) => {
            return res.json(resp.make()
                .setMessage("Query successful Admin!")
                .setResponseCode(200)
                .setData(results)
            )
        }, (error) => {
            if (error) {
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(500)
                    .setMessage("There was an error :(")
                )
            }
    })
})


router.post('student/depandfac', (req, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM departmentsAndFaculties WHERE schoolID = ${con.escape(post.scID)}`,
        (results, fields) => {
                return res.json(resp.make()
                    .setMessage("Query successful Student!")
                    .setResponseCode(200)
                    .setData(results)
                )
        }, (error) => {
            if (error) {
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(500)
                    .setMessage("There was an error :(")
                )
            }
    })
})


router.post('admin/students/fulltime', (req, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM fulltimeStud WHERE schoolID = ${con.escape(post.scID)}`,
        (results, fields) => {
            if (admin){
                return res.json(resp.make()
                    .setMessage("Query successful Admin!")
                    .setResponseCode(200)
                    .setData({fields, table: results})
                )
            }
            else{
                return res.json(resp.make()
                    .setMessage("You don't have access to this information")
                    .setResponseCode(200)
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
})


router.post('admin/school/numprofs', (req, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM professorsAtSchool WHERE schoolID = ${con.escape(post.scID)}`,
        (results_pnum, fields_pnum) => {
            sql.query(`SELECT * FROM allProfs WHERE schoolID = ${con.escape(post.scID)}`,
            (results_pnames, fields_pnames) => {
                if (admin){
                    return res.json(resp.make()
                        .setMessage("Query successful Admin!")
                        .setResponseCode(200)
                        .setData({fields,
                            num: results_pnum[0].NumInstructors,
                            profs: results_pnames})
                    )
                }
                else{
                    return res.json(resp.make()
                        .setMessage("You don't have access to this information")
                        .setResponseCode(200)
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
        }, (error) => {
            if (error) {
                return res.json(resp.make()
                    .setError(error)
                    .setResponseCode(500)
                    .setMessage("There was an error :(")
                )
            }
    })
})