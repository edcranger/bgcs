<template>
  <div class="section1 grey lighten-3 pa-4">
    <v-container>
      <v-layout align-center row wrap>
        <v-flex xs12 md6 class="text-xs-center">
          <i class="fas fa-warehouse fa-4x"></i>
          <h1 class="mb-3">
            ONSITE
            <span class="light-green--text">TRAINING</span>
          </h1>
          <h3
            class="mb-5"
          >BGCS will come train your group and/or come to your facility at your convenience. We have taught groups as small as 6 and as large as 300. We have also taught classes at 5am and 11pm. You pick the time and the place. We are here or there for you!</h3>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center">
          <v-avatar :tile="false" size="300" color="grey lighten-4">
            <img :src="require('@/assets/pics/20.jpg')" alt="avatar" contain />
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Section1",
  data() {
    return {};
  }
};
</script>

<style>
</style>
