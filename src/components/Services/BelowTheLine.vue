<template>
  <div class="event-planning">
    <v-container>
      <v-layout align-center row wrap>
        <v-flex xs12 sm8 md6 class="mt-3 text-xs-center">
          <img
            height="300"
            width="380"
            :src="require('@/assets/events/event2.png')"
            alt="avatar"
            contain
          />
          <!-- <p
            class="subheading text-xs-center"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit hic sunt, alias deserunt ipsa consequatur fuga.</p>-->
          <v-btn class="primary mb-5" route to="/contactUs">Contact Us</v-btn>
        </v-flex>
        <v-flex xs12 sm4 md6 class="text-xs-right mb-5">
          <h1 class="display-1 text-xs-left font-weight-medium">
            Below-the-Line
            <span class="light-green--text">Activations</span>
          </h1>

          <v-list class="pa-0 grey lighten-3">
            <v-list-tile v-for="(item, index) in items" :key="index">
              <v-list-tile-action>
                <v-icon color="indigo">{{item.icon}}</v-icon>
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
        src="https://i0.wp.com/myarsenalstrength.com/wp-content/uploads/2015/08/parallax-dark.jpg?ssl=1"
        height="150"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="text-xs-center">
            <h2 class="display-3">
              <span class="light-green--text">Nation</span>wide
            </h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BelowTheLine",
  components: {},
  data() {
    return {
      items: [
        {
          name: "Product Sampling",
          icon: "redeem"
        },
        {
          name: "Push Selling",
          icon: "far fa-money-bill-alt"
        },
        {
          name: "Grassroots Program",
          icon: "fas fa-seedling"
        },
        {
          name: "House-to-House/Store-to-Store Activations",
          icon: "fas fa-store"
        },
        {
          name: "Barangay Invasion",
          icon: "location_city"
        },
        {
          name: "Recorida",
          icon: "local_shipping"
        },
        {
          name: "Bundling",
          icon: "shopping_basket"
        }
      ]
    };
  }
};
</script>

<style>
</style>
