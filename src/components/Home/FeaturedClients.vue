<template>
  <div class="featured-clients grey lighten-3">
    <v-container>
      <h2 class="grey--text">Featured Clients</h2>
      <v-layout align-center justify-space-around fill-height row wrap>
        <v-flex xs6 sm2 class="pa-3">
          <v-img height="120" :src="require('@/assets/clients/7eleven.png')" contain></v-img>
        </v-flex>
        <v-flex xs6 sm2 class="pa-3">
          <v-img height="120" :src="require('@/assets/clients/shopee.png')" contain></v-img>
        </v-flex>

        <v-flex xs6 sm2 class="pa-3">
          <v-img height="120" :src="require('@/assets/clients/kooler.png')" contain></v-img>
        </v-flex>
        <v-flex xs6 sm2 class="pa-3">
          <v-img height="120" :src="require('@/assets/clients/futaba.png')" contain></v-img>
        </v-flex>
        <v-flex xs6 sm2 class="pa-3">
          <v-img height="120" :src="require('@/assets/clients/qualimed.png')" contain></v-img>
        </v-flex>
        <v-flex xs6 sm2 class="pa-3">
          <v-img height="120" :src="require('@/assets/clients/kaeser.png')" contain></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FeaturedClients",
  data() {
    return {};
  }
};
</script>

<style>
</style>
