"use strict"
const express = require('express')
const { resp } = require('../components/response')
const { OurSQL } = require('../components/oursql')
let router = express.Router()
let sql = new OurSQL()
let con = sql.getConnection()

router.post('/all', (req, res) => {
    let post = {
        scID: req.body.scid,
        depName: req.body.depName
    }
    sql.query(`SELECT C.* FROM Course AS C, Department AS D, Faculty AS F WHERE C.departmentID=D.dID AND D.facultyID=F.fID AND D.name=${con.escape(post.depName)} AND F.schoolID=${con.escape(post.scID)}`,
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

// Enrolled courses of a student
// Front end sends the student ID (of logged in student) 
// and it returns all enrolled courses of the student
router.post('/student/ecourses', (req, res) => {
    let post = {
        sID: req.body.sid 
    }
    sql.query(`SELECT Department, CourseCode, Name, type, timeSlot, location FROM coursesEnrolled WHERE sID= ${con.escape(post.sID)}`,
        (results, fields) => {
            return res.json(resp.make()
                .setMessage("Query successful!")
                .setResponseCode(200)
                .setData({results, fields   })
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

// All instructors in a specific school ID defined by the admin
router.post('/admin/instructors', (req, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM courseProfs WHERE schoolID= ${con.escape(post.scID)}`,
        (results, fields) => {
            if (post.admin){
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

// All courses in a department of a school defined by the students school
// The student knows its school because it is sent it after authentication
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

// The total students per course at ontechu
router.post('/admin/school/ontechu/course/total', (req, res) => {
    let post = {
        admin: req.body.admin,
    }
    sql.query("SELECT * FROM numStudentsPerCourse",
        (results, fields) => {
            if (post.admin){
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

// All courses in the database that have students enrolled in it
router.post('/admin/school/active', (req, res) => {
    let post = {
        admin: req.body.admin
    }
    sql.query("SELECT * FROM activeSchools",
        (results, fields) => {
            if (post.admin) {
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

// All students in the database
router.post('/admin/allstudents', (req, res) => {
    let post = {
        admin: req.body.admin,
    }
    sql.query("SELECT * FROM allStudents",
        (results, fields) => {
            if (post.admin){
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

// 
router.post('/student/activecourses', (req, res) => {
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


router.post('/student/depandfac', (req, res) => {
    let post = {
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


router.post('/admin/students/fulltime', (req, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM fulltimeStud`,
        (results, fields) => {
            if (post.admin){
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


router.post('/admin/school/numprofs', (req, res) => {
    let post = {
        admin: req.body.admin,
        scID: req.body.scid
    }
    sql.query(`SELECT * FROM professorsAtSchool WHERE schoolID = ${con.escape(post.scID)}`,
        (results_pnum, fields_pnum) => {
            sql.query(`SELECT * FROM allProfs WHERE schoolID = ${con.escape(post.scID)}`,
            (results_pnames, fields_pnames) => {
                if (post.admin){
                    return res.json(resp.make() 
                        .setMessage("Query successful Admin!")
                        .setResponseCode(200)
                        .setData({fields_pnames,
                            num: results_pnum[0].numInstructors,
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

module.exports = router