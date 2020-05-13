<template>
  <div class="accreditation">
    <v-layout align-center justify-space-around fill-height row wrap>
      <v-flex xs6 sm2 class="my-2">
        <v-img height="120" :src="require('@/assets/accreditation/dole.png')" contain></v-img>
      </v-flex>
      <v-flex xs6 sm2 class="my-2">
        <v-img height="120" :src="require('@/assets/accreditation/oshc.png')" contain></v-img>
      </v-flex>

      <v-flex xs6 sm2 class="my-2">
        <v-img height="120" :src="require('@/assets/accreditation/1.png')" contain></v-img>
      </v-flex>
      <v-flex xs6 sm2 class="my-2">
        <v-img height="120" :src="require('@/assets/accreditation/aha.png')" contain></v-img>
      </v-flex>
      <v-flex xs6 sm2 class="my-2">
        <v-img height="120" :src="require('@/assets/accreditation/ashi.png')" contain></v-img>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Accreditation"
};
</script>

<style>
</style>
