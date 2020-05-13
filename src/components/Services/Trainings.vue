<template>
  <div class="trainings">
    <div class="py-2">
      <v-card>
        <v-parallax
          dark
          src="https://lh3.googleusercontent.com/proxy/fo8ukvD945Ybn8kpv0q0J9PDRWVO4pQzSE8RGnr0xAyGJv5UdZ_xHUMD2peLLcXwyyHv4dadG2JLhcxu6fNXJHB-BpaJ7uTaaaW4r4DlhYMGYT06LG_mvon9m0GLiAI-rp07QuBGiSnH"
          height="200"
        >
          <v-layout align-center justify-center fill-height row wrap>
            <v-flex xs12 class="toper text-xs-center">
              <h2 class="display-3 mt-5">Trainings</h2>
            </v-flex>
          </v-layout>
        </v-parallax>
      </v-card>
      <v-tabs centered icons-and-text class="secondNav" color="grey lighten-3">
        <v-tabs-slider color="black"></v-tabs-slider>

        <v-tab href="#tab-1">
          Emergency
          <v-icon large color="green">fas fa-heartbeat</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          OSH
          <v-icon large color="green">fas fa-hard-hat</v-icon>
        </v-tab>

        <v-tab-item :value="'tab-' + 1">
          <EandS />
        </v-tab-item>
        <v-tab-item :value="'tab-' + 2">
          <Osh />
        </v-tab-item>
      </v-tabs>
    </div>

    <!-- <Aha />
    <Ashi />-->
  </div>
</template>

<script>
import EandS from "@/components/Services/EandS";
import Osh from "@/components/Services/Osh";

export default {
  name: "Trainings",
  components: {
    EandS,
    Osh
  },
  data() {
    return {};
  }
};
</script>

<style>
.secondNav {
  margin-top: 48px;
  width: 100%;
}
</style>
