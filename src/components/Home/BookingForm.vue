<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Book</v-btn>
      </template>
      <v-card>
        <v-card-text>
          <!-- <v-container grid-list-md>
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
          </v-container>-->
          <v-container grid-list-md>
            <h2>Booking Form</h2>
            <v-form ref="form" v-model="form" class="pa-1 pt-4">
              <v-text-field
                label="Full Name*"
                :rules="[rules.length(10)]"
                v-model="bookForm.name"
                required
              ></v-text-field>

              <v-text-field
                label="Email*"
                :rules="[rules.email]"
                type="email"
                v-model="bookForm.email"
                required
              ></v-text-field>

              <v-text-field
                label="Phone*"
                :rules="[rules.length(11)]"
                type="number"
                v-model="bookForm.phone"
                required
              ></v-text-field>

              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                :rules="[rules.required]"
                v-model="bookForm.age"
                required
              ></v-select>

              <v-autocomplete
                :items="['Nurse', 'Pharmacists', 'Doctor', 'Others','Non Medical']"
                label="Occupation"
                v-model="bookForm.occupation"
              ></v-autocomplete>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="submitBooking()" :disabled="!form">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="bookingSubmitDialog" persistent max-width="390">
      <v-card>
        <v-card-title class="headline">Confirmation</v-card-title>
        <v-card-text>
          Booking inquiry sent! Please wait for our representative to contact you.
          <br />
          <br />Thank you
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="bookingSubmitDialog = false">Close</v-btn>
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
      bookingSubmitDialog: false,
      form: false,
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
      dialog: false,
      rules: {
        email: v => (v || "").match(/@/) || "Please enter a valid email",
        length: len => v =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        required: v => !!v || "This field is required"
      }
    };
  },
  methods: {
    submitBooking() {
      db.collection("bookings")
        .add(this.bookForm)
        .then(() => {
          this.$refs.form.reset();
          this.dialog = false;
          this.bookingSubmitDialog = true;
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
