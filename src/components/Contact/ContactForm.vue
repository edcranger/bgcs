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
          v-model="name"
          :rules="[rules.length(6)]"
          color="green  "
          counter="15"
          label="Name"
          class="white--text"
          style="min-height: 96px"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          color="green"
          label="Phone number"
          mask="phone"
          class="white--text"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          color="green"
          label="Email address"
          type="email"
        ></v-text-field>
        <v-textarea v-model="message" auto-grow color="green" label="Message" rows="3"></v-textarea>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
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
export default {
  name: "ContactForm",
  data() {
    return {
      name: null,
      agreement: false,
      message: null,
      dialog: false,
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined,
      phone: undefined,
      rules: {
        email: v => (v || "").match(/@/) || "Please enter a valid email",
        length: len => v =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        password: v =>
          (v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
        required: v => !!v || "This field is required"
      }
    };
  }
};
</script>

<style>
</style>
