<template>
  <div class="bookings-admin">
    <v-card class="elevation-5 cardmessage">
      <v-toolbar color="grey darken-4" dark>
        <v-toolbar-title>Bookings</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list three-line class="pa-0 hidden-sm-and-down">
        <v-data-table :headers="sceduleDataHeader" :items="scheduleData" class="elevation-3">
          <template v-slot:items="props">
            <td class="text-xs-left">
              <span>{{ props.item.date | moment("MMM, D") }}</span>
            </td>
            <td class="text-xs-left">
              <router-link
                style="text-decoration:none"
                :to="{name: 'bookedList', params: {id: props.item.id}}"
              >{{ props.item.name }}</router-link>
            </td>
            <td
              class="text-xs-left"
            >{{ autoComplete(props.item.status, props.item.date, props.item.id) }}</td>
            <td class="text-xs-left">{{ props.item.max }}</td>
            <td
              :class="[remainingSlot(props.item.id, props.item.max) != 'Full' ? 'text-xs-left'  : 'error--text']"
            >{{ remainingSlot(props.item.id, props.item.max) }}</td>
            <td class="text-xs-left">{{ enrolledNumber(props.item.id) }}</td>
            <td class="text-xs-left">{{inquiredNumber(props.item.id)}}</td>
          </template>
        </v-data-table>
      </v-list>

      <v-container fluid grid-list-md class="hidden-md-and-up">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('name', '<')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By name</span>
          </v-btn>
          <span>Sort projects by date</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('date', '>')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By date</span>
          </v-btn>
          <span>Sort projects by date</span>
        </v-tooltip>
        <v-data-iterator
          :items="scheduleData"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          content-tag="v-layout"
          row
          wrap
        >
          <template v-slot:item="props">
            <v-flex xs12 sm6 md4 lg3>
              <v-card>
                <v-card-title>
                  <h4>
                    <router-link
                      style="text-decoration:none"
                      :to="{name: 'bookedList', params: {id: props.item.id}}"
                    >{{ props.item.name }}</router-link>
                  </h4>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>Date:</v-list-tile-content>
                    <v-list-tile-content class="align-end">
                      <span>{{ props.item.date | moment("MMM, D") }}</span>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Status:</v-list-tile-content>
                    <v-list-tile-content
                      class="align-end"
                    >{{autoComplete(props.item.status,props.item.date, props.item.id)}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Total Slot:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.max }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Avail Slot:</v-list-tile-content>
                    <v-list-tile-content
                      :class="[remainingSlot(props.item.id, props.item.max) != 'Full' ? 'align-end'  : 'error--text align-end']"
                    >{{ remainingSlot(props.item.id, props.item.max) }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Enrolled:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ enrolledNumber(props.item.id) }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Inquired:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{inquiredNumber(props.item.id)}}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </template>
        </v-data-iterator>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Bookings",
  data() {
    return {
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      sceduleDataHeader: [
        { text: "Date", value: "date" },
        { text: "Type", value: "name" },
        { text: "Status", value: "status" },
        { text: "Total slot", value: "slot" },
        { text: "Avail slot", value: "avail" },
        { text: "Enrolled", value: "enrolled" },
        { text: "Inquired", value: "inquired" }
      ],
      scheduleData: [],
      scheduleCensus: []
    };
  },
  methods: {
    autoComplete: function(status, date, id) {
      if (status == "In-coming" && moment(Date.now()).isAfter(date)) {
        db.collection("schedule")
          .doc(id)
          .update({
            status: "Done"
          })
          .then(() => {})
          // eslint-disable-next-line no-console
          .catch(err => console.log(err));
        return "Done";
      } else if (status == "Done" && moment(Date.now()).isAfter(date)) {
        return "Done";
      } else {
        return "In-coming";
      }
      // return moment(Date.now())
    },
    sortBy(prop, order) {
      if (order == "<") {
        this.scheduleData.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
      } else {
        this.scheduleData.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      }
    },
    inquiredNumber(id) {
      let number = 0;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == id) {
          number++;
        }
      });
      return number;
    },
    enrolledNumber(id) {
      let number = 0;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == id && census.status == "confirmed") {
          number++;
        }
      });
      return number;
    },
    remainingSlot(id, max) {
      let number = 0;
      let result;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == id && census.status == "confirmed") {
          number++;
        }
      });
      result = max - number;

      if (result == 0) {
        return "Full";
      } else {
        return `${result}`;
      }
    }
  },
  created() {
    let ref1 = db.collection("schedule").orderBy("date", "desc");
    let ref2 = db.collection("bookings");

    ref1.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.scheduleData.push({
            id: doc.id,
            name: doc.data().name,
            date: doc.data().date,
            max: doc.data().max,
            description: doc.data().description,
            schedType: doc.data().schedType,
            status: doc.data().status,
            open: doc.data().open
          });
        }
      });
    });

    ref2.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.scheduleCensus.push({
            id: doc.id,
            trainingId: doc.data().idOfTraining,
            status: doc.data().status
          });
        }
      });
    });
  }
};
</script>

<style>
</style>
