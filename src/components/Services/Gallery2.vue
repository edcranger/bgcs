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
          md2
          class="pa-2"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <v-img height="100" :src="image"></v-img>
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
        require("@/assets/events/Slide2.png"),
        require("@/assets/events/Slide3.png"),
        require("@/assets/events/Slide4.png"),
        require("@/assets/events/Slide5.png"),
        require("@/assets/events/Slide6.png"),
        require("@/assets/events/Slide7.png"),
        require("@/assets/events/Slide8.png"),
        require("@/assets/events/Slide9.png"),
        require("@/assets/events/Slide10.png"),
        require("@/assets/events/Slide11.png"),
        require("@/assets/events/Slide12.png"),
        require("@/assets/events/Slide13.png"),
        require("@/assets/events/Slide14.png"),
        require("@/assets/events/Slide15.png"),
        require("@/assets/events/Slide16.png"),
        require("@/assets/events/Slide17.png"),
        require("@/assets/events/Slide18.png"),
        require("@/assets/events/Slide19.png"),
        require("@/assets/events/Slide20.png"),
        require("@/assets/events/Slide21.png"),
        require("@/assets/events/Slide22.png"),
        require("@/assets/events/Slide23.png"),
        require("@/assets/events/Slide24.png"),
        require("@/assets/events/Slide25.png"),
        require("@/assets/events/Slide26.png"),
        require("@/assets/events/Slide27.png")
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
