<template>
  <div class="trainings">
    <div class="py-2">
      <v-tabs centered color="light-green darken-2
" dark icons-and-text class="secondNav">
        <v-tabs-slider color="black"></v-tabs-slider>

        <v-tab href="#tab-1">
          Emergency
          <v-icon>fas fa-heartbeat</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          OSH
          <v-icon>fas fa-hard-hat</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Events
          <v-icon>fas fa-glass-cheers</v-icon>
        </v-tab>

        <v-tab-item :value="'tab-' + 1">
          <EandS />
        </v-tab-item>
        <v-tab-item :value="'tab-' + 2">
          <Osh />
        </v-tab-item>
        <v-tab-item :value="'tab-' + 3">
          <Events />
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
import Events from "@/components/Services/Events";

export default {
  name: "Tranings",
  components: {
    EandS,
    Osh,
    Events
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
