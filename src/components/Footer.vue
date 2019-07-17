<template>
  <div class="footer">
    <v-footer dark height="auto">
      <v-card flat tile class="footer light-green darken-2 white--text text-xs-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Passion drives us! It motivates us! We continue to be enthusiastic in what we do to have a mutual sharing of skills and knowledge for the betterment of any project we are in.</v-card-text>
        <v-card-text
          class="white--text pt-0"
        >Our credibility is nurtured from life experiences and dedication. Our commitment brings about quality, efficiency and competency. We persevere and thus we only produce and serve the best.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text black">
          &copy;2019 —
          <strong>
            Powered by
            <span class="orange--text">V</span>ertive
            <span class="orange--text">I</span>nteractive
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  }
};
</script>

<style>
.footer {
  width: 100%;
}
</style>
