<template>
  <div class="bgcs-admin black">
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6 lg5 class="mt-5">
          <v-card class="loginForm elevation-1 pa-3 grey darken-4" dark>
            <v-img height="300" :src="require('@/assets/logo3.png')" contain></v-img>
            <v-card-text>
              <p class="red--text">{{showError}}</p>
              <v-form ref="form" v-model="form" dark>
                <v-text-field
                  append-icon="person"
                  name="login"
                  label="Email"
                  type="text"
                  :rules="[rules.required, rules.email]"
                  v-model="email"
                  required
                ></v-text-field>
                <v-text-field
                  @keyup.enter="login"
                  append-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  :rules="[rules.required]"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <div class="login-btn">
              <v-spacer></v-spacer>
              <v-btn
                @click="login"
                block
                color="green"
                :disabled="!form"
                class="white--text"
                :loading="loading"
              >Login</v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
import Footer from "@/components/Footer";
export default {
  name: "BgcsAdmin",
  data() {
    return {
      form: false,
      loading: false,
      email: "",
      password: "",
      showError: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        email: v => (v || "").match(/@/) || "Please enter a valid email"
      }
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred.user);
          this.$router.replace("/adminDashboard");
        })
        .catch(err => {
          this.showError = err.message;
          console.log(err);
        });
    }
  },
  mounted() {}
};
</script>
<style scoped lang="css">
.split-bg {
  height: 10%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
  background-color: black;
}
.bgcs-admin {
  background-color: black;
  height: 100%;
}
.loginForm {
  margin-top: 10%;
}
</style>
