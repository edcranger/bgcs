<template>
  <div class="event-planning">
    <v-container fluid>
      <v-layout align-center row wrap>
        <v-flex xs12 sm8 md6 class="text-xs-center">
          <img
            height="300"
            width="350"
            :src="require('@/assets/events/event3.png')"
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
            <span class="light-green--text">Creatives</span>
          </h1>

          <v-list class="pa-0 grey lighten-3">
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
  name: "Creatives",
  data() {
    return {
      items: [
        {
          name: "Concepts and Design",
          icon: "fas fa-palette"
        },
        {
          name: "Booth Fabrication",
          icon: "fas fa-person-booth"
        },
        {
          name: "Production and Stage Design",
          icon: "how_to_vote"
        },
        {
          name: "Audio Visual Presentation",
          icon: "video_library"
        },
        {
          name: "Merchandising Collaterals",
          icon: "fas fa-luggage-cart"
        },
        {
          name: "Tarpaulin, Posters, Flyers",
          icon: "fas fa-mail-bulk"
        }
      ]
    };
  }
};
</script>

<style>
</style>
