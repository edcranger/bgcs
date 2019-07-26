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
        <div v-for="messages in inquiryData" :key="messages.id" @click="readMessage(messages.id)">
          <template>
            <v-list-tile
              route
              avatar
              ripple
              :to="{name: 'viewMessage', params: {id:messages.name,}}"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon
                    size="15"
                    v-if="!messages.unread"
                    color="grey"
                    class="mb-1 mr-2"
                  >fas fa-envelope-open</v-icon>
                  <v-icon
                    size="15"
                    v-else-if="messages.unread"
                    color="green"
                    class="mb-1 mr-2"
                  >fas fa-envelope</v-icon>
                  <span :class="{ 'font-weight-bold' : messages.unread}">{{messages.name}}</span>
                </v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{messages.email}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{messages.message}}.</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action @click="deleteMessage(messages.id)">
                <v-icon color="grey lighten-1" class="deleteButton">far fa-trash-alt</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Inquiries",
  data() {
    return {
      inquiryData: []
    };
  },
  created() {
    let ref = db.collection("inquiries").orderBy("timestamp", "asc");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.inquiryData.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
            unread: doc.data().unread
          });
        }
      });
    });
  },

  methods: {
    deleteMessage(id) {
      db.collection("inquiries")
        .doc(id)
        .delete()
        .then(() => {
          this.inquiryData = this.inquiryData.filter(message => {
            return message.id != id;
          });
        });
    },
    readMessage(id) {
      db.collection("inquiries")
        .doc(id)
        .update({
          unread: false
        })
        .then(() => {
          console.log("updated");
        })
        .catch(err => console.log(err));
    }
  },
  watch: {
    inquiryData: {
      handler(val) {
        console.log(this.inquiryData);
      },
      deep: true
    }
  }
};
</script>

<style>
.deleteButton {
  cursor: pointer;
}
</style>
