<template>
  <v-container fluid fill-height grid-list-md fill>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar color="accent" dark>
            <v-tabs v-model="active" color="accent" dark slider-color="primary">
              <v-tab ripple>Instructors</v-tab>
              <v-tab ripple>Number of Students Per Course</v-tab>
              <v-tab ripple>Active Schools</v-tab>
              <v-tab ripple>All Students</v-tab>
              <v-tab ripple>Fulltime Students</v-tab>
              <v-tab ripple>Number of Profs</v-tab>
            </v-tabs>
          </v-toolbar>
          <v-card-text>
            <v-tabs-items v-model="active">
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-data-table :headers="oneHeader" :items="oneData" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.prof }}</td>
                        <td class="text-xs-centre">{{ props.item.course }}</td>
                        <td class="text-xs-centre">{{ props.item.schoolID }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-data-table :headers="twoHeader" :items="twoData" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-centre">{{ props.item.numStudents }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-data-table :headers="threeHeader" :items="threeData" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-data-table :headers="fourHeader" :items="fourData" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.studentID }}</td>
                        <td class="text-xs-centre">{{ props.item.Student }}</td>
                        <td class="text-xs-centre">{{ props.item.School }}</td>
                        <td class="text-xs-centre">{{ props.item.schoolID }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-data-table :headers="fiveHeader" :items="fiveData" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-centre">{{ props.item.NumofClasses }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-data-table :headers="sixHeader" :items="sixData" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td class="text-xs-centre">{{ props.item.Instructor }}</td>
                        <td class="text-xs-centre">{{ props.item.schoolID }}</td>
                      </template>
                    </v-data-table>
                    Number of profs: {{numProfs}}
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios"
import sessionstorage from "sessionstorage"

export default {
  data() {
    return {
      active: null,
      oneHeader: [],
      oneData: [],
      twoHeader: [],
      twoData: [],
      threeHeader: [],
      threeData: [],
      fourHeader: [],
      fourData: [],
      fiveHeader: [],
      fiveData: [],
      sixHeader: [],
      sixData: [],
      numProfs: null
    }
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  },
  mounted() {
    axios
      .post("/admin/instructors", {
        scid: sessionstorage.getItem("scid"),
        admin: sessionstorage.getItem("admin")  
      })
      .then(response => {
        this.oneHeader = response.data.data.fields.map(x => ({text: x.name, value: x.name}) );
        this.oneData = response.data.data.table;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      })

    axios
      .post("/admin/school/ontechu/course/total", {
        admin: sessionstorage.getItem("admin")
      })
      .then(response => {
        this.twoHeader = response.data.data.fields.map(x => ({text: x.name, value: x.name}) );
        this.twoData = response.data.data.table;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });

    axios
      .post("/admin/school/active", {
        admin: sessionstorage.getItem("admin")
      })
      .then(response => {
        this.threeHeader = response.data.data.fields.map(x => ({text: x.name, value: x.name}) );
        this.threeData = response.data.data.table;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });

    axios
      .post("/admin/allstudents", {
        admin: sessionstorage.getItem("admin")
      })
      .then(response => {
        this.fourHeader = response.data.data.fields.map(x => ({text: x.name, value: x.name}) );
        this.fourData = response.data.data.table;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });

    axios
      .post("/admin/students/fulltime", {
        admin: sessionstorage.getItem("admin"),
        scid: sessionstorage.getItem("scid")
      })
      .then(response => {
        this.fiveHeader = response.data.data.fields.map(x => ({text: x.name, value: x.name}) );
        this.fiveData = response.data.data.table;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });

    axios
      .post("admin/school/numprofs", {
        admin: sessionstorage.getItem("admin"),
        scid: sessionstorage.getItem("scid")
      })
      .then(response => {
        this.sixHeader = response.data.data.fields_pnames.map(x => ({text: x.name, value: x.name}) );
        this.sixData = response.data.data.profs;
        this.numProfs = response.data.data.num;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });
  }
}
</script>