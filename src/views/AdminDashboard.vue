<template>
  <div class="admin-dashboard">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md3 class="pa-3">
          <v-list two-line subheader class="elevation-3">
            <v-toolbar flat class="transparent">
              <v-list class="pa-0 grey darken-4" dark>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img
                      src="https://preen.inquirer.net/files/2018/05/bea-alonzo-breakup-e1525846325572.jpg"
                    />
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Cindy Mae</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-toolbar>

            <v-list-tile route :to="{name: adminDashboard}">
              <v-list-tile-avatar>
                <v-icon class="green white--text">dashboard</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-badge color="red mr-4">
                  <template v-slot:badge>
                    <!-- <span v-if="unReadCount != 0 && menuData.badge">{{unReadCount}}</span> -->
                  </template>
                </v-badge>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile route :to="{name: adminDashboard}">
              <v-list-tile-avatar>
                <v-icon class="green white--text">assignment</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Messages</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-badge color="red mr-4">
                  <template v-slot:badge>
                    <!-- <span v-if="unReadCount != 0 && menuData.badge">{{unReadCount}}</span> -->
                  </template>
                </v-badge>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile route :to="{name: adminDashboard}">
              <v-list-tile-avatar>
                <v-icon class="green white--text">fas fa-calendar-alt</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Schedule</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-badge color="red mr-4">
                  <template v-slot:badge>
                    <!-- <span v-if="unReadCount != 0 && menuData.badge">{{unReadCount}}</span> -->
                  </template>
                </v-badge>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile route :to="{name: adminDashboard}">
              <v-list-tile-avatar>
                <v-icon class="green white--text">fas fa-cog</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Admin Settings</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-badge color="red mr-4">
                  <template v-slot:badge>
                    <!-- <span v-if="unReadCount != 0 && menuData.badge">{{unReadCount}}</span> -->
                  </template>
                </v-badge>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>

        <!--------Message Input--------->
        <v-flex xs12 md9 class="pa-3">
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
                      <v-icon size="15" color="grey" class="mb-1">fas fa-envelope-open</v-icon>Sample Title
                    </v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">Sample Headline</v-list-tile-sub-title>
                    <v-list-tile-sub-title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at eaque dicta nemo ullam optio odio tenetur corporis delectus, temporibus illum obcaecati consequuntur earum, illo, distinctio quibusdam sequi nisi ea.</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action @click="toggle(index)">
                    <v-list-tile-action-text>Sample Action</v-list-tile-action-text>
                    <v-icon color="grey lighten-1">star_border</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard"
};
</script>

<style>
.admin-dashboard {
  margin-top: 80px;
}
</style>
