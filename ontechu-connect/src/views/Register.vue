<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex d-flex xs10>
                        <v-card class="elevation-3">
                            <v-card-text>
                                <v-form>
                                    <v-container grid-list-xs pa-5>
                                        <v-stepper v-model="e1">
                                            <v-stepper-header>
                                                <v-stepper-step :complete="e1 > 1" step="1">Faculties</v-stepper-step>
                                                <v-divider></v-divider>
                                                <v-stepper-step :complete="e1 > 2" step="2">Departments</v-stepper-step>
                                                <v-divider></v-divider>
                                                <v-stepper-step step="3">Offered Courses</v-stepper-step>
                                            </v-stepper-header>
                                            <v-stepper-items>
                                                <v-stepper-content step="1">
                                                    <v-card
                                                            class="mb-5"
                                                            color="grey lighten-1"
                                                            height="400px"
                                                    >
                                                        <v-container xs12>
                                                            <v-layout justify-center align-center>
                                                                <v-flex xs12>
                                                                    <v-select
                                                                            :items="faculties"
                                                                            label="Faculties"
                                                                            solo
                                                                            v-model="selfaculty"
                                                                    ></v-select>
                                                                </v-flex>
                                                            </v-layout>
                                                        </v-container>
                                                    </v-card>
                                                    <v-btn
                                                            color="primary"
                                                            @click="loadDepartments"
                                                    >
                                                        Search
                                                    </v-btn>
                                                    <v-btn flat>Cancel</v-btn>
                                                </v-stepper-content>
                                                <v-stepper-content step="2">
                                                    <v-card
                                                            class="mb-5"
                                                            color="grey lighten-1"
                                                            height="400px"
                                                    >
                                                        <v-container xs12>
                                                            <v-layout justify-center align-center>
                                                                <v-flex xs12>
                                                                    <v-select
                                                                            :items="departments"
                                                                            label="Deparments"
                                                                            solo
                                                                            v-model="seldepartment"
                                                                    ></v-select>
                                                                </v-flex>
                                                            </v-layout>
                                                        </v-container>
                                                    </v-card>
                                                    <v-btn
                                                            color="primary"
                                                            @click="lookupCourses"
                                                    >
                                                        Search
                                                    </v-btn>
                                                    <v-btn flat>Cancel</v-btn>
                                                </v-stepper-content>
                                                <v-stepper-content step="3">
                                                    <v-card
                                                            class="mb-5"
                                                            color="grey lighten-1"
                                                            height="400px"
                                                    >
                                                        <v-container xs12>
                                                            <v-layout justify-center align-center>
                                                                <v-flex xs12>
                                                                    <v-select
                                                                            :items="courses"
                                                                            label="Courses"
                                                                            solo
                                                                    ></v-select>
                                                                </v-flex>
                                                            </v-layout>
                                                        </v-container>
                                                    </v-card>
                                                    <v-btn color="primary" @click="addCourse">
                                                        Add Course
                                                    </v-btn>
                                                    <v-btn flat>Cancel</v-btn>
                                                </v-stepper-content>
                                            </v-stepper-items>
                                        </v-stepper>
                                    </v-container>
                                </v-form>
                                <v-btn @click="backToTheFuture" block color="accent" dark>Back to Dashboard</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-snackbar
                v-model="snackbar"
                color="primary"
                :timeout="6000"
        >
            Course Added Successfully!
            <v-btn
                    dark
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
    import axios from "axios"
    import sessionstorage from "sessionstorage"

    export default {
        data () {
            return {
                snackbar: null,
                e1: 0,
                selfaculty: null,
                seldepartment: null,
                depAndFaculty: [],
                departments: [],
                faculties: [],
                courses: []
            }
        },
        mounted() {
            let context = this
            axios
                .post("/student/depandfac", {
                    scid: sessionstorage.getItem('scid')
                })
                .then(response => {
                    response.data.data.forEach(element => {
                        context.depAndFaculty.push({department: element.Department, faculty: element.Faculty})
                    })
                    context.depAndFaculty.forEach(element => {
                        context.faculties.push(element.faculty)
                    })
                })
                .catch(error => {
                    // eslint-disable-next-line
                    console.error(error);
                })
        },
        methods: {
            lookupCourses() {
                this.e1 = 3
                let context = this
                axios
                    .post("/all", {
                        scid:  sessionstorage.getItem('scid'),
                        depName: context.seldepartment

                    })
                    .then(response => {
                        response.data.data.forEach(element => {
                            context.courses.push(element.name)
                        })
                    })
                    .catch(error => {
                        // eslint-disable-next-line
                        console.error(error);
                    })
            },
            loadDepartments() {
                this.e1 = 2
                for (let i = 0; i < this.depAndFaculty.length; i++) {
                    if(this.depAndFaculty[i].faculty ===  this.selfaculty) {
                        this.departments.push(this.depAndFaculty[i].department)
                    }
                }
            },
            addCourse() {
                this.snackbar = true
                this.e1 = 1
                this.selfaculty = null
                this.seldepartment = null
            },
            backToTheFuture() {
                this.$router.push("/dashboard/home")
            }
        }
    }
</script>
