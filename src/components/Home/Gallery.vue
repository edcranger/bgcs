<template>
  <div class="gallery">
    <v-container fluid>
      <h1 class="display-3 text-xs-center font-weight-medium">Photo Gallery</h1>
      <p class="text-xs-center font-weight-medium">Check Out Our Photos</p>
      <v-layout align-center justify-center row fill-height wrap class="elevation-3">
        <v-toolbar flat color="grey darken-4
" dark>
          <v-btn icon>
            <v-icon>far fa-images</v-icon>
          </v-btn>
          <v-toolbar-title>Albums</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>fas fa-camera-retro</v-icon>
          </v-btn>
        </v-toolbar>
        <gallery :images="images" :index="index" @close="index = null"></gallery>

        <v-flex
          xs12
          md4
          class="pa-3"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <v-img height="330" :src="image"></v-img>
        </v-flex>
      </v-layout>
      <p></p>
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
  name: "Gallery",
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      images: [
        require("@/assets/pics/11.jpg"),
        require("@/assets/pics/6.jpg"),
        require("@/assets/pics/9.jpg"),
        require("@/assets/pics/events1.jpg"),
        require("@/assets/pics/events3.jpg"),
        require("@/assets/pics/events4.jpg")
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
