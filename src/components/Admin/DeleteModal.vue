<template>
  <div class="delete-modal">
    <v-btn fab small flat @click="deleteMessageDialog = true">
      <v-icon color="grey lighten-1" class="deleteButton">far fa-trash-alt</v-icon>
    </v-btn>
    <v-dialog v-model="deleteMessageDialog" persistent max-width="390">
      <v-card>
        <v-card-title class="headline">Delete Message</v-card-title>
        <v-card-text>
          Are you sure you want to delete this message?
          <strong>{{id}}</strong>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="deleteMessage(id)">Yes</v-btn>
          <v-btn color="error darken-1" @click="deleteMessageDialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
export default {
  name: "DeleteModal",
  props: ["id", "inquiryData"],
  data() {
    return {
      deleteMessageDialog: false
    };
  },
  methods: {
    deleteMessage: function(id) {
      db.collection("inquiries")
        .doc(id)
        .delete()
        .then(() => {
          this.deleteMessageDialog = false;
        });
    }
  },
  created() {}
};
</script>

<style>
</style>
