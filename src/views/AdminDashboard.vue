<template>
  <div class="admin-dashboard">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md3 class="pa-1 hidden-sm-and-down">
          <v-list two-line subheader class="elevation-3">
            <v-toolbar flat class="transparent">
              <v-list class="pa-0 grey darken-4" dark>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <i class="fas fa-user-tie fa-2x"></i>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{showUser}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-toolbar>

            <v-list-tile v-for="(item, index) in dashBoardMenu" :key="index" route :to="item.route">
              <v-list-tile-avatar>
                <v-icon class="green white--text">{{item.icon}}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-badge color="red mr-4">
                  <template v-slot:badge></template>
                </v-badge>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>

        <!-- side appearing modal -->
        <v-speed-dial
          class="hidden-md-and-up"
          v-model="fab"
          right
          direction="right"
          :transition="transition"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-2" dark fab>
              <v-icon v-if="fab">close</v-icon>
              <v-icon v-else>menu</v-icon>
            </v-btn>
          </template>
          <v-btn
            v-for="(item, index) in dashBoardMenu"
            @click.stop="fab = true"
            :key="index"
            route
            :to="item.route"
            fab
            dark
            small
            color="green"
          >
            <v-icon fab class="white--text">{{item.icon}}</v-icon>
          </v-btn>
        </v-speed-dial>
        <v-flex xs12 md9 class="pa-1">
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "AdminDashboard",
  components: {},
  computed: {
    showUser: function() {
      return this.adminData.adminName;
    }
  },
  created() {
    let ref = db
      .collection("admin")
      .where("adminId", "==", firebase.auth().currentUser.uid);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.adminData = doc.data();
        this.adminData.id = doc.id;
      });
    });
  },
  data() {
    return {
      adminData: [],
      fab: true,
      transition: "slide-y-reverse-transition",
      dashBoardMenu: [
        {
          title: "Dashboard",
          route: "/adminDashboard",
          color: "dark",
          icon: "dashboard",
          iconClass: "indigo white--text"
        },
        {
          title: "Bookings",
          route: "/adminDashboard/bookings",
          color: "dark",
          icon: "assignment",
          iconClass: "indigo white--text"
        },
        {
          title: "Schedule",
          route: "/adminDashboard/schedule",
          color: "dark",
          icon: "fas fa-calendar-alt",
          iconClass: "indigo white--text"
        },
        {
          title: "Admin Settings",
          route: "/adminDashboard/adminSettings",
          color: "dark",
          icon: "fas fa-cog",
          iconClass: "indigo white--text"
        }
      ]
    };
  }
};
</script>

<style>
.admin-dashboard {
  margin-top: 90px;
}
</style>
