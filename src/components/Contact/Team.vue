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
          img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSibEVq85qKMqEqR52_9KtW7CSZ5nKS4l3dyJfVi-t02vWLWS`
        },
        {
          name: "Cindy Mortera, R.N., E.M.T-B",
          position: "VP Finance / Training Head",
          img: `https://preen.inquirer.net/files/2018/05/bea-alonzo-breakup-e1525846325572.jpg`
        },

        {
          name: "Randy “Randal” Boco",
          position: "VP Operations / Event Director",
          img: `https://philnews.ph/wp-content/uploads/2018/10/Carlo-Aquino.jpg`
        },
        {
          name: "Irene “Shena” Alsree",
          position: "Marketing Associate",
          img: `data:image/jpeg;base64,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`
        },
        {
          name: "Cris V. Corsanes",
          position: "Sales Executive ",
          img: `https://marriedbiography.com/wp-content/uploads/2017/06/derek-ramsay.jpg`
        }
      ]
    };
  }
};
</script>

<style>
</style>
