<template>
  <div class="nav">
    <nav>
      <v-toolbar app class="black" height="100" dark>
        <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up grey darken-4"></v-toolbar-side-icon>
        <v-img :src="require('@/assets/logo3.png')" class="mr-5 my-1" contain max-width="220" />

        <v-spacer></v-spacer>

        <div class="hidden-sm-and-down">
          <v-btn flat app class="light-green--text" route to="/">Home</v-btn>
          <v-menu offset-y>
            <v-btn flat slot="activator" class="light-green--text">
              <v-icon left>expand_more</v-icon>
              <span>Services</span>
            </v-btn>
            <v-list class="light-green darken-2">
              <v-list-tile route to="/trainings">
                <v-list-tile-title class="white--text">Trainings</v-list-tile-title>
              </v-list-tile>
              <v-list-tile route to="/events">
                <v-list-tile-title class="white--text">Events</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat app class="light-green--text" route to="/about">About</v-btn>
          <v-btn flat app class="light-green--text" route to="/clients">Clients</v-btn>
          <v-btn flat app class="light-green--text" route to="/contactUs">Contact Us</v-btn>
        </div>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="grey darken-4">
        <!--use column to stack 2 elements on top of each other-->
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-img :src="require('@/assets/logo3.png')"></v-img>

            <p class="white--text subheading mt-1">Service Menu Bar</p>
          </v-flex>
          <div></div>
        </v-layout>
        <v-list>
          <v-list-tile route to="/">
            <v-list-tile-action>
              <v-icon class="white--text">fas fa-home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="white--text">
          <v-list-group class="white--text" value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-icon class="mr-4 white--text">store_mall_directory</v-icon>
                <v-list-tile-title>Services</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile class="ml-5" route to="/trainings">
              <v-icon class="mr-2 white--text">store_mall_directory</v-icon>
              <v-list-tile-title>Training</v-list-tile-title>
            </v-list-tile>

            <v-list-tile class="ml-5" route to="/events">
              <v-icon class="mr-2 white--text">fas fa-glass-cheers</v-icon>
              <v-list-tile-title>Event</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </v-list>
        <v-list-tile route to="/about">
          <v-list-tile-action>
            <v-icon class="white--text">library_books</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile route to="/clients">
          <v-list-tile-action>
            <v-icon class="white--text">people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">Clients</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile route to="/contactUs">
          <v-list-tile-action>
            <v-icon class="white--text">phonelink_ring</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">Contact Us</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  message: "eds",
  data() {
    return {
      drawer: false,

      links: [
        { text: "Home", route: "/", icon: "fas fa-home" },
        {
          text: "Trainings",
          route: "/trainings",
          icon: "store_mall_directory"
        },
        {
          text: "Events",
          route: "/events",
          icon: "fas fa-glass-cheers"
        },
        { text: "About", route: "/about", icon: "library_books" },
        { text: "Clients", route: "/clients", icon: "people" },
        { text: "Contact Us", route: "/contactUs", icon: "phonelink_ring" }
      ]
    };
  },
  created() {}
};
</script>

<style>
.nav {
  position: absolute;
}
</style>
