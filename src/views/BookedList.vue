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
        <v-data-table :headers="headers" :items="bookings" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.payment }}</td>
            <td class="text-xs-left">{{ props.item.phone }}</td>
            <td class="text-xs-left">{{ props.item.referrence }}</td>
            <td class="text-xs-left">
              <v-btn
                small
                v-if="props.item.status == 'Not confirmed'"
                color="primary"
                @click="uniqueActivateForm(props.item.id)"
              >
                Activate
                <!-- Activation Dialog -->
              </v-btn>
              <v-btn
                small
                v-if="props.item.status == 'confirmed'"
                color="error"
                @click="cancelBooking(props.item.id)"
              >
                Cancel
                <!-- Activation Dialog -->
              </v-btn>

              <div v-if="props.item.referrenceInputForm">
                <v-text-field label="Referrence #:" v-model="props.item.referrenceNumber"></v-text-field>
                <v-btn small color="success" @click="confirmBooking(props.item.id)">enter</v-btn>
              </div>
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
  name: "BookedList",
  data() {
    return {
      idParams: this.$route.params.id,
      cancelationDialog: false,
      activationDialog: false,
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
      bookings: []
    };
  },

  created() {
    let ref = db
      .collection("bookings")
      .where("idOfTraining", "==", this.$route.params.id);

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.bookings.push({
            id: doc.id,
            name: doc.data().name,
            status: doc.data().status,
            payment: doc.data().payment,
            phone: doc.data().phone,
            referrence: doc.data().referrence,
            action: doc.data().action,
            referrenceInputForm: false,
            referrenceNumber: doc.data().referrence
          });
        }
        if (change.type === "modified") {
          let doc = change.doc;
          db.collection("bookings")
            .where("idOfTraining", "==", this.$route.params.id)
            .onSnapshot(querySnapshot => {
              this.bookings = [];
              querySnapshot.forEach(doc => {
                this.bookings.push({
                  id: doc.id,
                  name: doc.data().name,
                  status: doc.data().status,
                  payment: doc.data().payment,
                  phone: doc.data().phone,
                  referrence: doc.data().referrence,
                  action: doc.data().action,
                  referrenceInputForm: false,
                  referrenceNumber: doc.data().referrence
                });
              });
            });
        }
      });
    });
  },
  methods: {
    uniqueActivateForm: function(id) {
      this.bookings.forEach(book => {
        if (book.id === id) {
          book.referrenceInputForm = !book.referrenceInputForm;
        }
      });
    },
    confirmBooking: function(id) {
      this.bookings.forEach(book => {
        if (book.id === id) {
          let ref = db
            .collection("bookings")
            .doc(id)
            .update({
              payment: "Paid",
              status: "confirmed",
              referrence: book.referrenceNumber
            })
            .then(() => {
              console.log(this.bookings);
              console.log(`${book.referrenceNumber} of ${id}`);
            });
        }
      });
    },
    cancelBooking: function(id) {
      this.bookings.forEach(book => {
        if (book.id === id) {
          let ref = db
            .collection("bookings")
            .doc(id)
            .update({
              status: "Not confirmed"
            })
            .then(() => {
              console.log(this.bookings);
              console.log(`${book.referrenceNumber} of ${id}`);
            });
        }
      });
    }
  }
};
</script>

<style>
</style>
