<template>
  <div class="who-we-ar">
    <v-container fluid>
      <v-layout align-center justify-space-between row wrap class="my-3">
        <v-flex xs12 sm12 md6 class="text-xs-center">
          <img width="340" :src="require('@/assets/logo1.jpg')" />
        </v-flex>
        <v-flex xs12 sm12 md6 class="text-xs-center">
          <h1 class="mb-3">
            Our
            <span class="light-green--text">Company</span>
          </h1>
          <h3
            class="word1 mb-5 subheading text-xs-center"
          >BGCS Marketing and Services Corporation is a Dynamic and Market – Driven, Service Provider.</h3>
          <h3
            class="word1 mb-5 subheading"
          >We thrive in focusing our engagements in advocating Health and Safety through highly effective Training Programs and in leveraging personal relationship to increase organizational and brand awareness by delivering efficient Events Management services.</h3>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-space-between row wrap class="my-5">
        <v-flex xs12 sm12 md6 class="text-xs-center">
          <h1 class="mb-3">
            <span class="light-green--text">Who</span>
            We Are?
          </h1>
          <h3
            class="word1 mb-5 subheading"
          >BGCS Marketing & Services Corporation is a team of medical professionals and creative production people serving top brands and companies nationwide, handling both Safety Training & Events Management. We thrive in focusing our engagements in advocating Health and Safety through highly effective Training Programs and in leveraging personal relationship to increase organizational and brand awareness by delivering efficient Events Management services.</h3>
        </v-flex>
        <v-flex xs12 sm12 md6 class="pa-2 text-xs-center">
          <img width="340" :src="require('@/assets/whoArewe.png')" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout align-center row wrap class="grey lighten-3 my-3 pa-5">
      <v-flex xs10 offset-xs1 class="text-xs-center">
        <h1 class="mb-3">
          <span class="light-green--text">What</span>
          We do?
        </h1>
        <h3
          class="mb-5 text-xs-center subheading"
        >BGCS Marketing & Services Corporation is a team of medical professionals and creative production people serving top brands and companies nationwide, handling both Safety Training & Events Management. We thrive in focusing our engagements in advocating Health and Safety through highly effective Training Programs and in leveraging personal relationship to increase organizational and brand awareness by delivering efficient Events Management services.</h3>
        <h3 class="word1 mb-5"></h3>
      </v-flex>

      <v-layout align-center justify-space-around row wrap fill-height>
        <v-flex xs12 sm12 md5 class="text-xs-center my-3">
          <i class="fab fa-font-awesome-flag fa-5x green--text"></i>
          <h2 class="mt-2">Mission</h2>
          <p
            class="mt-2"
          >To be dedicated in presenting exceptional services and extraordinary marketing arm, training and event programs for every client. The company that functions as a leading team that will formulate safety processes flow in every event it possesses and to value safety more than events.</p>
        </v-flex>
        <v-flex xs12 sm12 md5 class="text-xs-center my-3">
          <i class="fas fa-eye fa-5x green--text"></i>
          <h2 class="mt-2">Vision</h2>
          <p
            class="mt-2"
          >To be the leading Events Management and Training company that serves as a pillar of the Safety and Events industry by creating a system that will build and uphold the brand. It renders foremost competency that enables continuous partnership by providing outstanding services in range of network.</p>
        </v-flex>
      </v-layout>
    </v-layout>

    <v-layout align-center justify-space-around row wrap class="my-3 text-xs-center">
      <v-flex xs12 sm12 md4 class="pa-3">
        <v-card class="mx-auto" color="green" dark max-width="400">
          <v-card-title>
            <v-icon large left>mdi-twitter</v-icon>
            <span class="title font-weight-light">Innovation</span>
          </v-card-title>

          <v-card-text class="font-weight-bold">
            "We are current! We are not afraid of new ideas and concepts but rather we formulate systems and frameworks to serve as a governing foundation.
            We improve and provide solutions suitable to the presenting needs. We continue to move forward as the industry demands us to be!"
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4 class="pa-3">
        <v-card class="mx-auto" color="grey darken-4" dark max-width="400">
          <v-card-title>
            <v-icon large left>mdi-twitter</v-icon>
            <span class="title font-weight-light">Passion</span>
          </v-card-title>

          <v-card-text class="font-weight-bold">
            "Passion drives us! It motivates us! We continue to be enthusiastic in what we do to have a mutual sharing of skills and knowledge for the betterment of any project we are in.
            Our credibility is nurtured from life experiences and dedication. Our commitment brings about quality, efficiency and competency. We persevere and thus we only produce and serve the best."
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4 class="pa-3">
        <v-card class="mx-auto" color="green" dark max-width="400">
          <v-card-title>
            <v-icon large left>mdi-twitter</v-icon>
            <span class="title font-weight-light">Safety and Events</span>
          </v-card-title>

          <v-card-text
            class="subheading font-weight-bold"
          >"These are the foundation of what we do and what we offer! These are not only fundamental in our everyday encounter, but it is our culture to proactively incorporate these in our overall management framework and operations."</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "WhoWeAre",
  data() {
    return {};
  }
};
</script>

<style scoped>
.word1 {
  text-align: justify;
}
</style>
