<template>
  <div class="service-category">
    <v-container fluid>
      <v-layout align-center justify-center row fill-height wrap class="text-xs-center">
        <v-flex xs12 md4 class="pa-3">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey darken-4"
              max-width="600"
              dark
            >
              <v-img
                :aspect-ratio="16/9"
                src="https://images.pexels.com/photos/1893606/pexels-photo-1893606.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out green v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >BLS AND ACLS</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-4" style="position: relative;">
                <v-btn color="red" class="buttonServ white--text" fab large right top>
                  <v-icon>fas fa-heartbeat</v-icon>
                </v-btn>

                <h3 class="display-1 font-weight-light mb-2">Emergency and Technical Rescue</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md4 class="pa-3">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey darken-4"
              max-width="600"
              dark
            >
              <v-img
                :aspect-ratio="16/9"
                src="http://workinfinite.com/wp-content/uploads/2018/11/work-safety-health.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out green v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >BOSH AND COSH</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-4" style="position: relative;">
                <v-btn color="orange" class="buttonServ white--text" fab large right top>
                  <v-icon>fas fa-hard-hat</v-icon>
                </v-btn>

                <h3 class="display-1 font-weight-light mb-2">Occupational Safety and Health</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md4 class="pa-3">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey darken-4"
              max-width="600"
              dark
            >
              <v-img
                :aspect-ratio="16/9"
                src="https://hox.ae/wp-content/uploads/2018/01/Corporate-Event-Planners-and-Wedding-Stage-Designers.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out green v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >Planning and Activation</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-4" style="position: relative;">
                <v-btn color="purple lighten-2" class="buttonServ white--text" fab large right top>
                  <v-icon>fas fa-glass-cheers</v-icon>
                </v-btn>

                <h3 class="display-1 font-weight-light mb-2">Events Management Service</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ServiceCategory"
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.buttonServ {
  position: absolute;
  top: -50px;
}
</style>
