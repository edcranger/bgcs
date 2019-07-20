<template>
  <div class="clients">
    <v-card>
      <v-parallax
        dark
        src="https://i0.wp.com/myarsenalstrength.com/wp-content/uploads/2015/08/parallax-dark.jpg?ssl=1"
        height="200"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="text-xs-center">
            <h2 class="display-3 mt-5">Our Clients</h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-card>
    <ClientPage />
    <Footer />
  </div>
</template>

<script>
import ClientPage from "@/components/Clients/ClientPage";
import Footer from "@/components/Footer";
export default {
  name: "Clients",
  components: {
    Footer,
    ClientPage
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
