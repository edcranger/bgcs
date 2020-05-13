<template>
  <div class="event-planning">
    <v-card class="mt-5">
      <v-parallax
        dark
        src="https://lh3.googleusercontent.com/proxy/fo8ukvD945Ybn8kpv0q0J9PDRWVO4pQzSE8RGnr0xAyGJv5UdZ_xHUMD2peLLcXwyyHv4dadG2JLhcxu6fNXJHB-BpaJ7uTaaaW4r4DlhYMGYT06LG_mvon9m0GLiAI-rp07QuBGiSnH"
        height="150"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="toper text-xs-center">
            <h2 class="display-3">
              We
              <span class="light-green--text">Provide</span>
            </h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-card>
    <v-container fluid>
      <v-layout align-center row wrap>
        <v-flex xs12 sm8 md6 class="text-xs-center">
          <img
            height="300"
            width="380"
            :src="require('@/assets/events/event1.png')"
            alt="avatar"
            contain
          />
          <!-- <p
            class="subheading text-xs-center"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit hic sunt, alias deserunt ipsa consequatur fuga.</p>-->
          <br />
          <v-btn class="primary mb-5" route to="/contactUs">Contact Us</v-btn>
        </v-flex>
        <v-flex xs12 sm4 md6 class="mb-5">
          <h1 class="font-weight-medium">
            Event
            <span class="light-green--text">Planning</span> and Activation
          </h1>

          <v-list dense class="pa-0 grey lighten-3">
            <v-list-tile v-for="(item, index) in items" :key="index">
              <v-list-tile-action>
                <v-icon color="green">{{item.icon}}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>

    <v-card>
      <v-parallax
        dark
        src="https://lh3.googleusercontent.com/proxy/fo8ukvD945Ybn8kpv0q0J9PDRWVO4pQzSE8RGnr0xAyGJv5UdZ_xHUMD2peLLcXwyyHv4dadG2JLhcxu6fNXJHB-BpaJ7uTaaaW4r4DlhYMGYT06LG_mvon9m0GLiAI-rp07QuBGiSnH"
        height="150"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="text-xs-center">
            <h2 class="display-3">
              <span class="light-green--text">Powered</span> Up
              <span class="light-green--text"></span>
              Events
            </h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-card>

    <!-- <div class="gallery">
      <v-layout row wrap>
        <gallery :images="images" :index="index" @close="index = null"></gallery>

        <v-flex
          xs6
          sm3
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <v-img :src="image"></v-img>
        </v-flex>
      </v-layout>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "EventPlanning",
  components: {},
  data() {
    return {
      images: [
        require("@/assets/pics/11.jpg"),
        require("@/assets/pics/6.jpg"),
        require("@/assets/pics/9.jpg"),
        require("@/assets/pics/events1.jpg")
      ],
      index: null,
      items: [
        {
          name: "Team Building",
          icon: "fas fa-cubes"
        },
        {
          name: "Sporting Events",
          icon: "fas fa-basketball-ball"
        },
        {
          name: "Event Medical Team",
          icon: "fas fa-notes-medical"
        },
        {
          name: "Conventions Conferences",
          icon: "fas fa-users"
        },
        {
          name: "Corporate Events",
          icon: "fas fa-user-tie"
        },
        {
          name: "Destination Management",
          icon: "fas fa-map-marked-alt"
        },
        {
          name: "Trade Shows and Exhibits",
          icon: "fas fa-ticket-alt"
        },
        {
          name: "Concerts",
          icon: "fas fa-guitar"
        },
        {
          name: "Talent and Entertainment",
          icon: "fas fa-theater-masks"
        },
        {
          name: "Brand Activations",
          icon: "fab fa-bandcamp"
        },
        {
          name: "Product Launch",
          icon: "fas fa-store-alt"
        }
      ]
    };
  }
};
</script>

<style>
</style>
