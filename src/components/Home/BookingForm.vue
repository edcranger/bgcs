<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Book</v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <span class="headline">Booking Form</span>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field label="Full Name*" v-model="bookForm.name" required></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="Email*" v-model="bookForm.email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Phone*" type="number" v-model="bookForm.phone" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  v-model="bookForm.age"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Nurse', 'Pharmacists', 'Doctor', 'Others','Non Medical']"
                  label="Occupation"
                  multiple
                  v-model="bookForm.occupation"
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
          <p>{{eventId}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="submitBooking()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "BookingForm",
  props: ["eventId"],
  data() {
    return {
      bookForm: {
        idOfTraining: this.eventId,
        name: null,
        email: null,
        phone: null,
        age: null,
        occupation: null,
        payment: "Not yet paid",
        status: "Not confirmed",
        referrence: "-----",
        action: false
      },
      dialog: false
    };
  },
  methods: {
    submitBooking() {
      db.collection("bookings")
        .add(this.bookForm)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
