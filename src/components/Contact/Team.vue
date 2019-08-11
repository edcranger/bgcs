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
        <h2 class="mt-3">{{item.name}}</h2>
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
          name: "Cindy Mortera, R.N., E.M.T-B",
          position: "VP Finance / Training Head",
          img: require("@/assets/team/cindy.jpg")
        },

        {
          name: "Randy “Randal” Boco",
          position: "VP Operations / Event Director",
          img: require("@/assets/team/randy.jpg")
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
        }
      ]
    };
  }
};
</script>

<style>
</style>
