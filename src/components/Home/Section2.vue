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
          <h3>BGCS will come train your group and/or come to your facility at your convenience. We have taught groups as small as 6 and as large as 300. We have also taught classes at 5am and 11pm. You pick the time and the place. We are here or there for you!</h3>
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
