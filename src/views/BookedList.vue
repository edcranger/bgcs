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

      <v-list three-line class="hidden-sm-and-down">
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
                v-show="props.item.show"
                v-if="props.item.status == 'Not confirmed'"
                color="primary"
                @click="uniqueActivateForm(props.item.id)"
              >
                Activate
                <!-- Activation Dialog -->
              </v-btn>
              <v-btn
                small
                v-show="props.item.show"
                v-if="props.item.status == 'Not confirmed'"
                color="warning"
                @click="deleteBookingInquiry(props.item.id)"
              >
                Delete
                <!-- Activation Dialog -->
              </v-btn>
              <v-btn
                v-if="!props.item.referrenceCancelBooking  && props.item.status == 'confirmed'"
                small
                color="error"
                @click="uniqueCancelationConfirmation(props.item.id)"
              >
                Cancel
                <!-- Activation Dialog -->
              </v-btn>
              <div v-if="props.item.referrenceCancelBooking" class="text-xs-center">
                <v-layout row>
                  <v-flex xs6>
                    <v-btn fab small color="green" flat @click="cancelBooking(props.item.id)">Yes</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn
                      fab
                      small
                      color="red"
                      flat
                      @click="props.item.referrenceCancelBooking = !props.item.referrenceCancelBooking"
                    >No</v-btn>
                  </v-flex>
                </v-layout>
              </div>

              <div v-if="props.item.referrenceInputForm">
                <v-text-field label="Referrence #:" v-model="props.item.referrenceNumber"></v-text-field>
                <v-btn small color="success" @click="confirmBooking(props.item.id)">enter</v-btn>
              </div>
            </td>
          </template>
        </v-data-table>
      </v-list>

      <v-container fluid grid-list-md class="hidden-md-and-up">
        <v-data-iterator
          :items="bookings"
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
                  <h4>{{ props.item.name }}</h4>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>Status:</v-list-tile-content>
                    <v-list-tile-content class="align-end">
                      <span>{{ props.item.status }}</span>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Payment:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.payment }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Phone:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.phone }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Referrence:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.referrence }}</v-list-tile-content>
                  </v-list-tile>
                  <v-layout row wrap>
                    <v-flex xs3 v-if="props.item.status == 'Not confirmed'" class="mr-4">
                      <v-btn
                        small
                        v-show="props.item.show"
                        color="primary"
                        @click="uniqueActivateForm(props.item.id)"
                      >
                        Activate
                        <!-- Activation Dialog -->
                      </v-btn>
                    </v-flex>
                    <v-flex xs3 v-if="props.item.status == 'Not confirmed'">
                      <v-btn
                        small
                        v-show="props.item.show"
                        color="warning"
                        @click="deleteBookingInquiry(props.item.id)"
                      >
                        Delete
                        <!-- Activation Dialog -->
                      </v-btn>
                    </v-flex>
                    <v-flex xs3 v-else-if="props.item.status == 'confirmed'">
                      <v-btn
                        v-if="!props.item.referrenceCancelBooking"
                        small
                        color="error"
                        @click="uniqueCancelationConfirmation(props.item.id)"
                      >
                        Cancel
                        <!-- Activation Dialog -->
                      </v-btn>
                      <div v-if="props.item.referrenceCancelBooking" class="text-xs-center">
                        <v-layout row>
                          <v-flex xs6>
                            <v-btn
                              fab
                              small
                              color="green"
                              flat
                              @click="cancelBooking(props.item.id)"
                            >Yes</v-btn>
                          </v-flex>
                          <v-flex xs6>
                            <v-btn
                              fab
                              small
                              color="red"
                              flat
                              @click="props.item.referrenceCancelBooking = !props.item.referrenceCancelBooking"
                            >No</v-btn>
                          </v-flex>
                        </v-layout>
                      </div>
                    </v-flex>
                    <v-flex xs9 v-if="props.item.referrenceInputForm">
                      <v-text-field label="Referrence #:" v-model="props.item.referrenceNumber"></v-text-field>
                      <v-btn small color="success" @click="confirmBooking(props.item.id)">enter</v-btn>
                      <v-btn small color="error" @click="uniqueActivateForm(props.item.id)">cancel</v-btn>
                    </v-flex>
                    <v-flex xs3 v-if="props.item.referrenceInputForm"></v-flex>
                  </v-layout>
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
export default {
  name: "BookedList",
  data() {
    return {
      show: true,
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
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
            referrenceNumber: doc.data().referrence,
            show: true,
            referrenceCancelBooking: false
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
                  referrenceNumber: doc.data().referrence,
                  show: true,
                  referrenceCancelBooking: false
                });
              });
            });
        }
      });
    });
  },
  methods: {
    uniqueCancelationConfirmation: function(id) {
      this.bookings.forEach(book => {
        if (book.id === id) {
          book.referrenceCancelBooking = !book.referrenceCancelBooking;
        }
      });
    },
    uniqueActivateForm: function(id) {
      this.bookings.forEach(book => {
        if (book.id === id) {
          book.referrenceInputForm = !book.referrenceInputForm;
          book.show = !book.show;
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
    },
    deleteBookingInquiry: function(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          db.collection("bookings")
            .doc(id)
            .delete()
            .then(() => {
              this.bookings = this.bookings.filter(booking => {
                return booking.id != id;
              });
            });
          Swal.fire("Deleted!", "Booking has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style>
</style>
