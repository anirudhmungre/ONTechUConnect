<template>
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
          @click="e1 = 2"
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
          @click="e1 = 3; lookupCourses"
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

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          View
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>


<script>
import axios from "axios"
import sessionstorage from "sessionstorage"

  export default {
    data () {
      return {
        e1: 0,
        selfaculty: null,
        seldepartment: null,
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
                response.data.data.foreach(element => {
                    context.departments.push({department: element.Department, faculty: element.Faculty})
                })
            })
            .catch(error => {
                // eslint-disable-next-line
                console.error(error);
            })
    },
    methods: {
        lookupCourses() {
          let context = this
            axios
            .post("/all", {
                scid:  sessionstorage.getItem('scid'), 
                depName: context.seldepartment

            })
            .then(response => {
                response.data.data.foreach(element => {
                    context.courses.push(element.name)
                })
            })
            .catch(error => {
                // eslint-disable-next-line
                console.error(error);
            })
        }
    }
  }
</script>
