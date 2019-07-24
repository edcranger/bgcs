<template>
  <div class="contact-form">
    <v-card class="mx-auto">
      <v-toolbar color="grey darken-3" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Please fill out this form to contact us</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-form ref="form" v-model="form" class="pa-3 pt-4">
        <v-text-field
          v-model="formdata.name"
          :rules="[rules.length(6)]"
          color="green  "
          counter="15"
          label="Name"
          class="white--text"
          style="min-height: 96px"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="formdata.phone"
          :rules="[rules.length(11)]"
          color="green"
          label="Phone number"
          class="white--text"
        ></v-text-field>
        <v-text-field
          v-model="formdata.email"
          :rules="[rules.email]"
          color="green"
          label="Email address"
          type="email"
        ></v-text-field>
        <v-textarea v-model="formdata.message" auto-grow color="green" label="Message" rows="3"></v-textarea>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="submitInquiry()"
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
        >Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "ContactForm",
  data() {
    return {
      formdata: {
        name: null,
        message: null,
        email: undefined,
        phone: undefined,
        unread: true,
        timestamp: Date.now()
      },
      dialog: false,
      form: false,
      isLoading: false,

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
    submitInquiry() {
      db.collection("inquiries")
        .add(this.formdata)
        .then(docRef => {
          this.$refs.form.reset();
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
