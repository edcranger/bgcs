<template>
  <div class="bookings-admin">
    <v-card class="elevation-5 cardmessage">
      <v-toolbar color="grey darken-4" dark>
        <v-toolbar-title>Bookings</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list three-line>
        <template>
          <v-list-tile route avatar ripple class="pa-3">
            <v-list-tile-content class="my-5">
              <v-list-tile-title>
                <v-icon size="15" color="grey" class="mb-1 mr-2">fas fa-user</v-icon>
                <strong>Virgina Colorado</strong>
                <span class="red--text ml-2">(Unconfirmed)</span>
              </v-list-tile-title>
              <v-list-tile-sub-title class="black--text">
                <strong>09958402424</strong>
              </v-list-tile-sub-title>
              <v-list-tile-sub-title class="text--primary">BLS (July 11, 2019)</v-list-tile-sub-title>

              <v-list-tile-sub-title>
                Reference #:
                <span class="red--text">Not yet paid</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>
                <v-btn color="primary">Activate</v-btn>
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                <v-icon color="grey lighten-1 " class="mt-1">star_border</v-icon>
              </v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
        </template>

        <template>
          <v-list-tile route avatar ripple class="pa-3">
            <v-list-tile-content class="my-5">
              <v-list-tile-title>
                <v-icon size="15" color="grey" class="mb-1 mr-2">fas fa-user</v-icon>
                <strong>Ken Detroit</strong>
                <span class="green--text ml-2">(confirmed)</span>
              </v-list-tile-title>
              <v-list-tile-sub-title class="black--text">
                <strong>09958402424</strong>
              </v-list-tile-sub-title>
              <v-list-tile-sub-title>BLS (July 11, 2019)</v-list-tile-sub-title>
              <v-list-tile-sub-title class="green--text">Paid</v-list-tile-sub-title>
              <v-list-tile-sub-title>
                Reference #:
                <span class="blue--text">102945</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>
                <v-btn color="error">Cancel</v-btn>
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                <v-icon color="grey lighten-1 " class="mt-1">star_border</v-icon>
              </v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
        </template>

        <template>
          <v-list-tile route avatar ripple class="pa-3">
            <v-list-tile-content class="my-5">
              <v-list-tile-title>
                <v-icon size="15" color="grey" class="mb-1 mr-2">fas fa-user</v-icon>
                <strong>Florida Low</strong>
                <span class="red--text ml-2">(Unconfirmed)</span>
              </v-list-tile-title>
              <v-list-tile-sub-title class="black--text">
                <strong>09958402424</strong>
              </v-list-tile-sub-title>
              <v-list-tile-sub-title class="text--primary">ACLS (July 12, 2019)</v-list-tile-sub-title>

              <v-list-tile-sub-title>
                Reference #:
                <span class="red--text">Not yet paid</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>
                <v-btn color="primary">Activate</v-btn>
              </v-list-tile-action-text>
              <v-list-tile-action-text>
                <v-icon color="grey lighten-1 " class="mt-1">star_border</v-icon>
              </v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Bookings"
};
</script>

<style>
</style>
