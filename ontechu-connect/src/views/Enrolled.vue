<template>
  <v-container fluid fill-height grid-list-md fill>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-layout column>
          <v-flex>
            <v-card class="mb-3">
              <v-toolbar dark color="accent">
                <v-toolbar-title class="text-uppercase">Enrolled Courses</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-slide-y-transition>
                <v-card-text>
                  <v-layout row>
                    <v-data-table :headers="header" :items="data" class="elevation-1">
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.sID }}</td>
                        <td class="text-xs-centre">{{ props.item.Student_Name }}</td>
                        <td class="text-xs-centre">{{ props.item.email }}</td>
                        <td class="text-xs-centre">{{ props.item.ceID }}</td>
                        <td class="text-xs-centre">{{ props.item.cCode }}</td>
                        <td class="text-xs-centre">{{ props.item.Course_Name }}</td>
                        <td class="text-xs-centre">{{ props.item.type }}</td>
                        <td class="text-xs-centre">{{ props.item.timeSlot }}</td>
                        <td class="text-xs-centre">{{ props.item.location }}</td>
                        <td class="text-xs-centre">{{ props.item.schoolID }}</td>
                      </template>
                    </v-data-table>
                  </v-layout>
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
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
      header: [],
      data: []
    }
  },
  mounted() {
      axios
        .post("/student/ecourses", {
            sid: sessionstorage.getItem("sid")
        })
        .then(response => {
            this.header = response.data.data.fields.map(x => ({text: x.name, value: x.name}) )
            this.data = response.data.data.results;
        })
        .error(error => {
            // eslint-disable-next-line
            console.error(error)
        })
  }
}
</script>
