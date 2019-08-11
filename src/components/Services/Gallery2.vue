<template>
  <div class="gallery">
    <v-container fluid>
      <p class="text-xs-center font-weight-medium">Check Out Our Photos</p>
      <v-layout align-center justify-center row fill-height wrap class="elevation-3">
        <v-toolbar flat color="grey darken-4
" dark>
          <v-btn icon>
            <v-icon>far fa-images</v-icon>
          </v-btn>
          <v-toolbar-title>Events Gallery</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>fas fa-camera-retro</v-icon>
          </v-btn>
        </v-toolbar>
        <gallery2 :images="images" :index="index" @close="index = null"></gallery2>

        <v-flex
          xs6
          md3
          class="pa-2"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <v-img height="250" :src="image"></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>-->
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  name: "Gallery2",
  components: {
    gallery2: VueGallery
  },
  data() {
    return {
      images: [
        require("@/assets/eventpics/1.jpg"),
        require("@/assets/eventpics/2.jpg"),
        require("@/assets/eventpics/3.jpg"),
        require("@/assets/eventpics/4.jpg"),
        require("@/assets/eventpics/5.jpg"),
        require("@/assets/eventpics/6.jpg"),
        require("@/assets/eventpics/7.jpg"),
        require("@/assets/eventpics/8.jpg"),
        require("@/assets/eventpics/9.jpg"),
        require("@/assets/eventpics/10.jpg")
      ],
      index: null
    };
  }
};
</script>

<style>
/* .image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
} */
</style>
