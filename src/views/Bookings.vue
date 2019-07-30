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

      <v-list three-line>
        <v-data-table :headers="sceduleDataHeader" :items="scheduleData" class="elevation-3">
          <template v-slot:items="props">
            <td>
              <router-link :to="{name: 'bookedList', params: {id: props.item.id}}">View</router-link>
            </td>
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.max }}</td>
            <td class="text-xs-left">{{ remainingSlot(props.item.id, props.item.max) }}</td>
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
        {
          text: "Schedule",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Date", value: "date" },
        { text: "Type", value: "type" },
        { text: "Status", value: "status" },
        { text: "Total slot", value: "slot" },
        { text: "Avail slot", value: "slot" },
        { text: "Enrolled", value: "slot" },
        { text: "Inquired", value: "action" }
      ],
      scheduleData: [],
      scheduleCensus: []
    };
  },
  methods: {
    inquiredNumber(eds) {
      let number = 0;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == eds) {
          number++;
        }
      });
      return number;
    },
    enrolledNumber(eds) {
      let number = 0;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == eds && census.status == "confirmed") {
          number++;
        }
      });
      return number;
    },
    remainingSlot(eds, max) {
      let number = 0;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == eds && census.status == "confirmed") {
          number++;
        }
      });
      return max - number;
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
