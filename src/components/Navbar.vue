<template>
  <div class="nav">
    <nav>
      <v-toolbar app class="black" dark>
        <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up black"></v-toolbar-side-icon>
        <v-img :src="require('@/assets/logo3.png')" class="mr-5" contain max-width="115" />

        <v-spacer></v-spacer>

        <div v-for="link in links" :key="link.text" class="hidden-sm-and-down">
          <v-btn flat app class="light-green--text" route :to="link.route">{{link.text}}</v-btn>
        </div>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="black">
        <!--use column to stack 2 elements on top of each other-->
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-img :src="require('@/assets/logo3.png')"></v-img>

            <p class="white--text subheading mt-1">Service Menu Bar</p>
          </v-flex>
          <div></div>
        </v-layout>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  message: "eds",
  data() {
    return {
      drawer: false,

      links: [
        { text: "Home", route: "/", icon: "fas fa-home" },
        {
          text: "Services",
          route: "/services",
          icon: "supervised_user_circle"
        },
        { text: "Clients", route: "/clients", icon: "fas fa-copyright" },
        { text: "About", route: "/about", icon: "fas fa-copyright" },
        { text: "Contact Us", route: "/contactUs", icon: "fas fa-copyright" }
      ]
    };
  }
};
</script>

<style>
.nav {
  position: absolute;
}
</style>
