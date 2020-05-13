<template>
  <div class="about">
    <v-card>
      <v-parallax
        dark
        src="https://i0.wp.com/myarsenalstrength.com/wp-content/uploads/2015/08/parallax-dark.jpg?ssl=1"
        height="200"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="toper text-xs-center">
            <h2 class="display-3 mt-5">About Us</h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-card>

    <WhoWEAre />
    <Team />
    <Footer />
  </div>
</template>

<script>
import WhoWEAre from "@/components/About/WhoWeAre";
import Team from "@/components/Contact/Team";
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: {
    WhoWEAre,
    Footer,
    Team
  }
};
</script>

<style>
.toper {
  margin-top: 50px;
}
</style>
