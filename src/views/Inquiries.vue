<template>
  <div class="inquiries">
    <!--------Message Input--------->

    <v-card class="elevation-5 cardmessage">
      <v-toolbar color="grey darken-4" dark>
        <v-toolbar-title>Inquiries</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <template>
          <v-list-tile route avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon size="15" color="grey" class="mb-1 mr-2">fas fa-envelope-open</v-icon>Edison Ocampo
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">edisonocampo.eo@gmail.com</v-list-tile-sub-title>
              <v-list-tile-sub-title>Hi! I just wanna know if you do trainings on weekends .</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action @click="toggle(index)">
              <v-icon color="grey lighten-1">far fa-trash-alt</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
        </template>

        <template>
          <v-list-tile route avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon size="15" color="green" class="mb-1 mr-2">fas fa-envelope</v-icon>Viviene Kay
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">vkei@gmail.com</v-list-tile-sub-title>
              <v-list-tile-sub-title>Hi. I would like to book for our company! Please contact me back</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action @click="toggle(index)">
              <v-icon color="grey lighten-1">far fa-trash-alt</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
        </template>

        <template>
          <v-list-tile route avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon size="15" color="grey" class="mb-1 mr-2">fas fa-envelope-open</v-icon>Mark Powers
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">mark_p@gmail.com</v-list-tile-sub-title>
              <v-list-tile-sub-title>Please send me a pricelist</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action @click="toggle(index)">
              <v-icon color="grey lighten-1">far fa-trash-alt</v-icon>
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
  name: "Inquiries"
};
</script>

<style>
</style>
