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

      <v-list three-line class="pa-0">
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
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.max }}</td>
            <td
              :class="[remainingSlot(props.item.id, props.item.max) != 'Full' ? 'text-xs-left'  : 'error--text']"
            >{{ remainingSlot(props.item.id, props.item.max) }}</td>
            <td class="text-xs-left">{{ enrolledNumber(props.item.id) }}</td>
            <td class="text-xs-left">{{inquiredNumber(props.item.id)}}</td>
          </template>
        </v-data-table>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Bookings",
  data() {
    return {
      sceduleDataHeader: [
        { text: "Date", value: "date" },
        { text: "Type", value: "type" },
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
    let ref1 = db.collection("schedule");
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
