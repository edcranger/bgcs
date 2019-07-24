<template>
  <div class="booked-list">
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
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.payment }}</td>
            <td class="text-xs-left">{{ props.item.phone }}</td>
            <td class="text-xs-left">{{ props.item.referrence }}</td>
            <td class="text-xs-left">
              <v-btn small color="primary">{{ props.item.action }}</v-btn>
              <v-btn small color="error">Erase</v-btn>
            </td>
          </template>
        </v-data-table>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BookedList",
  data() {
    return {
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
