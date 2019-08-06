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

      <v-list subheader>
        <v-subheader>Administrators</v-subheader>
        <v-list-tile v-for="admin in admins" :key="admin.adminId" avatar>
          <v-list-tile-avatar>
            <i class="fas fa-user-circle fa-2x"></i>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="admin.adminName"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon :color="admin.active ? 'teal' : 'grey'">chat_bubble</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm12 md12>
            <v-card class="loginForm elevation-1 pa-3">
              <h1>Add admin</h1>
              <v-card-text>
                <div class="layout column align-center"></div>
                <v-form ref="form" v-model="form" dark>
                  <v-text-field
                    append-icon="person"
                    name="name"
                    label="First Name"
                    type="text"
                    :rules="[rules.required]"
                    v-model.trim="name"
                    required
                  ></v-text-field>
                  <v-text-field
                    append-icon="mail"
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
                  <div class="login-btn">
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="createAdmin()"
                      block
                      :disabled="!form"
                      color="green"
                      class="white--text mt-4"
                      :loading="loading"
                    >Add as admin</v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-divider></v-divider>
      <div class="text-xs-center">
        <v-btn class="my-5 text-xs-center" color="error" large @click="logout()">
          <i class="fas fa-sign-out-alt fa-2x mr-3"></i>Logout Admin
        </v-btn>
      </div>
    </v-card>
    <v-dialog v-model="adminMadeDialog" persistent max-width="390">
      <v-card>
        <v-card-title class="headline">New Admin</v-card-title>
        <v-card-text>
          Successful! New admin has been added.
          <br />
          <br />Thank you
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="adminMadeDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "admin14",
  data() {
    return {
      admins: [],

      adminMadeDialog: false,
      form: false,
      loading: false,
      name: "",
      email: "",
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        email: v => (v || "").match(/@/) || "Please enter a valid email"
      }
    };
  },
  methods: {
    createAdmin() {
      let ref = db.collection("admin").doc(this.name);

      ref.get().then(doc => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            ref
              .set({
                adminName: this.name,
                adminId: cred.user.uid
              })
              .then(() => {
                this.$refs.form.reset();
                this.logout();
                this.adminMadeDialog = true;
              });
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "auth/weak-password") {
              alert("The password is too weak.");
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
      });
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/bgcsAdmin");
        });
    }
  },
  created() {
    let ref = db.collection("admin");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.admins.push({
            id: doc.id,
            adminName: doc.data().adminName,
            adminId: doc.data().adminId,
            active: true
          });
        }
        if (change.type === "modified") {
          let doc = change.doc;
          db.collection("bookings").onSnapshot(querySnapshot => {
            this.admins = [];
            querySnapshot.forEach(doc => {
              this.bookings.push({
                id: doc.id,
                adminName: doc.data().adminName,
                adminId: doc.data().adminId,
                active: true
              });
            });
          });
        }
      });
    });
  }
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
