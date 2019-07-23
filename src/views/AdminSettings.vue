<template>
  <div class="admin-settings">
    <v-card class="elevation-5 cardmessage">
      <v-toolbar color="grey darken-4" dark>
        <v-toolbar-title>Admin Settings</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm12 md12>
            <v-card class="loginForm elevation-1 pa-3">
              <h1>Add admin</h1>
              <v-card-text>
                <div class="layout column align-center"></div>
                <v-form dark>
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
                  class="white--text"
                  :loading="loading"
                >Add as admin</v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "admin14",
  data: () => ({
    loading: false,
    email: "",
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      email: v => (v || "").match(/@/) || "Please enter a valid email"
    }
  }),
  methods: {
    login() {}
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
</style>
