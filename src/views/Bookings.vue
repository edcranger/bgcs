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
        <v-data-table :headers="bookingData" :items="bookingList" class="elevation-3">
          <template v-slot:items="props">
            <td>
              <router-link
                :to="{name: 'bookedList', params: {id: props.item.id}}"
              >{{ props.item.schedType }}</router-link>
            </td>
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.max }}</td>
            <td class="text-xs-left">
              <v-btn small color="primary" v-if="props.item.open">Open</v-btn>
              <v-btn small color="primary" v-else-if="!props.item.open">close</v-btn>
            </td>
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
      bookingData: [
        {
          text: "Schedule",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Date", value: "date" },
        { text: "Type", value: "type" },
        { text: "Status", value: "status" },

        { text: "Slot", value: "slot" },
        { text: "Action", value: "action" }
      ],
      bookingList: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Status", value: "status" },
        { text: "Payment", value: "payment" },
        { text: "Phone", value: "phone" },
        { text: "Referrence", value: "referrence" },
        { text: "Action", value: "action" }
      ],
      desserts: [
        {
          name: "Edison Ocampo",
          status: "confirmed",
          payment: "paid",
          phone: `09958402424`,
          referrence: 119265,
          action: "activate"
        },
        {
          name: "Frozen Yogurt",
          status: "not confirmed",
          payment: "not yet paid",
          phone: `09958402424`,
          referrence: `-----`,
          action: "activate"
        }
      ]
    };
  },
  created() {
    let ref = db.collection("schedule");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.bookingList.push({
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
  }
};
</script>

<style>
</style>
