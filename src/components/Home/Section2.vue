<template>
  <div class="section2 pa-4">
    <v-container>
      <v-layout align-center row wrap>
        <v-flex xs12 md6 class="mt-3 text-xs-center">
          <v-avatar :tile="false" size="300" color="grey lighten-4">
            <img :src="require('@/assets/pics/events2.jpg')" alt="avatar" class="mb-5" />
          </v-avatar>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center">
          <i class="fas fa-people-carry fa-4x"></i>
          <h1 class="mb-3">
            SUPERB
            <span class="light-green--text">EVENTS</span> HANDLING
          </h1>
          <h3>
            Experience events with BGCS like no other!
            Our creative team has a big heart for the craft, having more than 16 years of experience handling different types of events nationwide and with involvement & knowledge in conducting events for international crowds and serving clients from around the world.
          </h3>
          <v-btn color="success" class="mt-2" route :to="{ name: 'events' }">More</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Section2",
  data() {
    return {};
  }
};
</script>

<style>
</style>
