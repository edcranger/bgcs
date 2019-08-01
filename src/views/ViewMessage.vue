<template>
  <div class="view-message">
    <v-layout row>
      <v-flex xs12>
        <div v-for="(item, index) in inquiryData  " :key="index">
          <v-card v-if="item.id == param">
            <v-toolbar color="grey darken-4" dark>
              <router-link to="/adminDashboard" style="text-decoration:none">
                <i class="far fa-arrow-alt-circle-left fa-2x white--text"></i>
              </router-link>

              <v-toolbar-title>{{ item.timestamp | moment("MMM D, YYYY") }}</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-list subheader three-line>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <i class="far fa-user mr-2"></i>
                    <strong>{{item.name}}</strong>
                  </v-list-tile-title>
                  <v-list-tile-sub-title></v-list-tile-sub-title>
                  <v-list-tile-sub-title>
                    <i class="fas fa-envelope-square mr-2"></i>
                    {{item.email}}
                  </v-list-tile-sub-title>
                  <v-list-tile-sub-title>
                    <i class="fas fa-phone-alt mr-2"></i>
                    {{item.phone}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile class>
                <i class="fas fa-comments mr-2"></i>
                {{item.message}}
              </v-list-tile>
            </v-list>

            <v-divider></v-divider>
            <div class="text-xs-right pa-3">
              <a
                style="text-decoration:none"
                :href="`mailto:${item.email}?subject=BGCS%20Inquiry%20Response&body=Hi ${item.name}, `"
              >
                <i class="fas fa-reply mr-1"></i>Reply to Email
              </a>
            </div>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "ViewMessage",
  props: ["inquiryData"],
  data() {
    return {
      param: this.$route.params.id
    };
  },
  created() {}
};
</script>

<style>
</style>
