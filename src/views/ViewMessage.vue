<template>
  <div class="view-message">
    <div class="mt-5">
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{message.name}}</v-list-tile-title>
          <v-list-tile-sub-title>Name</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{message.phone}}</v-list-tile-title>
          <v-list-tile-sub-title>Phone</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{message.email}}</v-list-tile-title>
          <v-list-tile-sub-title>Email</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <p style="text-align: justify " class="pa-3">{{message.message}}</p>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "ViewMessage",
  data() {
    return {
      param: this.$route.params.id,
      message: []
    };
  },
  created() {
    let ref = db
      .collection("inquiries")
      .where("id", "==", this.$route.params.id);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.message = doc.data();
        this.message.id = doc.id;
      });
    });
  }
};
</script>

<style>
</style>
