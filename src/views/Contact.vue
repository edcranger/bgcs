<template>
  <div class="contact">
    <v-card>
      <v-parallax
        dark
        src="https://lh3.googleusercontent.com/proxy/fo8ukvD945Ybn8kpv0q0J9PDRWVO4pQzSE8RGnr0xAyGJv5UdZ_xHUMD2peLLcXwyyHv4dadG2JLhcxu6fNXJHB-BpaJ7uTaaaW4r4DlhYMGYT06LG_mvon9m0GLiAI-rp07QuBGiSnH"
        height="200"
      >
        <v-layout align-center justify-center fill-height row wrap>
          <v-flex xs12 class="toper text-xs-center">
            <h2 class="display-3 mt-5">Contact Us</h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-card>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 class="text-xs-center">
          <v-container>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.0550460689565!2d121.06792326232832!3d14.614231504464426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7f20e694bc3%3A0xf90dd909b85ddc1b!2s543+Col.+Bonny+Serrano+Ave%2C+Project+4%2C+Quezon+City%2C+1109+Metro+Manila!5e0!3m2!1sen!2sph!4v1562788831356!5m2!1sen!2sph"
              width="100%"
              height="450"
              frameborder="0"
              style="border:0"
              class="mx-0"
              allowfullscreen
            ></iframe>
          </v-container>
        </v-flex>
        <v-flex xs12 md4 class="mt-5 pa-3">
          <v-card>
            <v-list three-line dark>
              <h3 class="white--text pa-3">Contact Information</h3>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="light-green">fas fa-mobile-alt</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>(02) 936.5845 | (02) 897.6200</v-list-tile-title>
                  <v-list-tile-sub-title>Telephone</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="light-green">fas fa-phone</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    (S) 0907.866.3292 |
                    (G) 0975.107.3532
                  </v-list-tile-title>
                  <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="light-green">mail</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>csmbgcs@gmail.com</v-list-tile-title>
                  <v-list-tile-sub-title>Training</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="light-green">mail</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>randal.bgcs@gmail.com</v-list-tile-title>
                  <v-list-tile-sub-title>Events</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="light-green">location_on</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>501 VS-4 CONDOMINIUM</v-list-tile-title>
                  <v-list-tile-title>#543 Bonny Serrano Avenue</v-list-tile-title>
                  <v-list-tile-sub-title>Bayanihan, Quezon City Philippines 1109</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <ContactForm class="mt-5 pa-3" />
        </v-flex>
      </v-layout>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import ContactForm from "@/components/Contact/ContactForm";

import Footer from "@/components/Footer";
export default {
  name: "Contact",
  components: {
    ContactForm,
    Footer
  }
};
</script>

<style>
</style>
