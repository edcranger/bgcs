<template>
  <div class="main-header mt-5">
    <div class="carouselBgcs">
      <v-carousel height="750" hide-controls>
        <v-carousel-item :src="items[0].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5">
              <v-img :src="require('@/assets/logo3.png')" contain max-width="500" />
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-carousel-item :src="items[1].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-right">
              <h1
                class="white--text font-weight-light"
              >We aim you to be more prepared than you have ever been. We know, We Share, We are your SAFETY advocate.</h1>
              <v-btn large route to="/trainings" class="success">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-carousel-item :src="items[2].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-left">
              <h1
                class="white--text font-weight-light"
              >We are Nurses, Doctors, Emergency Medical Technicians and Safety Practitioners. Learn from our years of cumulative experience, skills and expertise.</h1>
              <v-btn route to="/trainings" large class="warning">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-carousel-item :src="items[3].src">
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="pa-5 text-xs-right">
              <h1
                class="white--text font-weight-light"
              >BGCS innovates to unite Creative Professionals in a complete array of teambuilding, event management, production and event promotion.</h1>
              <v-btn route to="/trainings" large class="error">Learn More</v-btn>
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
