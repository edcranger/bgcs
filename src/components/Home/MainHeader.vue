<template>
  <div class="main-header mt-5">
    <div class="carouselBgcs">
      <v-carousel height="600">
        <v-carousel-item :src="items[0].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-center">
              <h1 class="white--text mb-3 font-weight-bold">BGCS HEADING 1</h1>
              <h4
                class="white--text display-1 font-weight-thin"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta! Debitis, laudantium! A tenetur animi.</h4>
              <v-btn large class="primary">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-carousel-item :src="items[1].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-right">
              <h1 class="white--text mb-3 font-weight-bold">BGCS HEADING 2</h1>
              <h4
                class="white--text display-1 font-weight-thin"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta! Debitis, laudantium! A tenetur animi.</h4>
              <v-btn large class="success">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-carousel-item :src="items[2].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-left">
              <h1 class="white--text mb-3 font-weight-bold">BGCS HEADING 3</h1>
              <h4
                class="white--text display-1 font-weight-thin"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta! Debitis, laudantium! A tenetur animi.</h4>
              <v-btn large class="warning">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-carousel-item :src="items[3].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-right">
              <h1 class="white--text mb-3 font-weight-bold">BGCS HEADING 4</h1>
              <h4
                class="white--text display-1 font-weight-thin"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta! Debitis, laudantium! A tenetur animi.</h4>
              <v-btn large class="error">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  components: {},
  data() {
    return {
      items: [
        {
          src: require("@/assets/picheaders/cpr.png")
        },
        {
          src: require("@/assets/picheaders/group.jpg")
        },
        {
          src: require("@/assets/picheaders/dummy.jpg")
        },
        {
          src: require("@/assets/picheaders/class.jpg")
        }
      ]
    };
  }
};
</script>

<style>
</style>
