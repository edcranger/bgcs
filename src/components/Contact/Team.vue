<template>
  <div class="team grey darken-3 pa-5">
    <h1 class="display-3 text-xs-center white--text">Our Team</h1>
    <v-layout align-center justify-space-around row fill-height wrap>
      <v-flex
        xs12
        md2
        class="text-xs-center white--text ma-5"
        v-for="(item, index) in team"
        :key="index"
      >
        <v-avatar size="150" color="grey lighten-4">
          <img :src="item.img" contain />
        </v-avatar>
        <h3 class="mt-3">{{item.name}}</h3>
        <p class="white--text">{{item.position}}</p>
      </v-flex>
    </v-layout>

    <h1 class="text-xs-center white--text mt-5">Instructors</h1>
    <!-- Instructors Tab -->
    <v-layout align-center justify-space-around row fill-height wrap>
      <v-flex
        xs12
        md2
        class="text-xs-center white--text ma-5"
        v-for="(item, index) in instructors"
        :key="index"
      >
        <v-avatar size="80" color="grey lighten-4">
          <img :src="item.img" contain />
        </v-avatar>
        <h4 class="mt-3">{{item.name}}</h4>
        <p class="white--text">{{item.position}}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "Engr. Gener A. de Leon",
          position: "President",
          img: require("@/assets/team/Gener.jpg")
        },
        {
          name: "Randy “Randal” Boco",
          position: "VP Operations / Event Director",
          img: require("@/assets/team/randy.jpg")
        },
        {
          name: "Ma. Cindy Mortera, R.N., E.M.T-B",
          position: "VP Finance / Training Head",
          img: require("@/assets/team/cindy.jpg")
        },
        {
          name: "Ma. Diana S. Mortera, R.N. ",
          position: "Training Marketing Associate ",
          img: require("@/assets/team/diana.jpg")
        },

        {
          name: "Irene “Shena” Alsree",
          position: "Marketing Associate",
          img: require("@/assets/team/shena.jpg")
        },
        {
          name: "Cris V. Corsanes",
          position: "Sales Executive ",
          img: require("@/assets/team/cris.jpg")
        },

        {
          name: "Erickson T. Santos",
          position: "Sales Executive",
          img: require("@/assets/team/erickson.jpg")
        }
      ],
      instructors: [
        {
          name: "Bayani G. Belangue Jr. , R.N., EMT-B",

          img: require("@/assets/team/bayani.jpg")
        },
        {
          name: "Gilbert B. Gimeno, R.N., R.M.,  EMT-B",

          img: require("@/assets/team/gilbert.jpg")
        },
        {
          name: "Khristian B. Dacanay, R.N., EMT-B",

          img: require("@/assets/team/khristian.jpg")
        },
        {
          name: "Jerome P. Mahilom, R.N., EMT-B",

          img: require("@/assets/team/jerome.jpg")
        },

        {
          name: "Jasmin B. Botor, R.M., R.N., EMT-D",

          img: require("@/assets/team/jasmin.jpg")
        },
        {
          name: "Janice R. Catubigan, R.N., EMT- B",

          img: require("@/assets/team/janice.jpg")
        },

        {
          name: "Carlito M. Bautista, R.P.T., EMT-B",

          img: require("@/assets/team/carlito.jpg")
        }
      ]
    };
  }
};
</script>

<style>
</style>
