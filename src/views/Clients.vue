<template>
  <div class="clients">
    <v-card>
      <v-parallax
        dark
        src="https://lh3.googleusercontent.com/proxy/fo8ukvD945Ybn8kpv0q0J9PDRWVO4pQzSE8RGnr0xAyGJv5UdZ_xHUMD2peLLcXwyyHv4dadG2JLhcxu6fNXJHB-BpaJ7uTaaaW4r4DlhYMGYT06LG_mvon9m0GLiAI-rp07QuBGiSnH"
        height="200"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="toper text-xs-center">
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
