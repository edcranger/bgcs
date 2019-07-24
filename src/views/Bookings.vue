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
              <router-link to="bookedList">{{ props.item.name }}</router-link>
            </td>
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td class="text-xs-left">{{ props.item.type }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.slot }}</td>
            <td class="text-xs-left">
              <v-btn small color="primary">{{ props.item.action }}</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-list>
    </v-card>
  </div>
</template>

<script>
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
      bookingList: [
        {
          name: "Training",
          type: "BLS (AHA)",
          date: "2019-07-23",
          status: "In-coming",
          slot: 3,
          action: "Open"
        },
        {
          name: "Training",
          type: "ACLS (ASHI)",
          date: "2019-07-30",
          status: "Done",
          slot: 0,
          action: "Close"
        },
        {
          name: "Training",
          type: "BLS (AHA)",
          date: "2019-07-24",
          status: "In-coming",
          slot: 3,
          action: "Open"
        },
        {
          name: "Training",
          type: "First Aid",
          date: "2019-07-12",
          status: "Done",
          slot: 5,
          action: "Close"
        },
        {
          name: "Training",
          type: "BLS and ACLS",
          date: "2019-08-02",
          status: "In-coming",
          slot: 20,
          action: "Open"
        },
        {
          name: "Training",
          type: "Disaster Risk Reduction Management",
          date: "2019-08-03",
          status: "In-coming",
          slot: 10,
          action: "Open"
        }
      ],
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
  }
};
</script>

<style>
</style>
