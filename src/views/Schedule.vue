<template>
  <div class="schedule">
    <v-card class="elevation-5 cardmessage">
      <v-toolbar color="grey darken-4" dark>
        <v-toolbar-title>Schedule</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-layout row wrap>
        <v-flex xs12 class="pa-2">
          <v-sheet height="500">
            <v-calendar ref="calendar" :value="today" color="primary" v-model="start">
              <template v-slot:day="{ date }">
                <template v-for="event in eventsMap[date]">
                  <v-menu :key="event.id" v-model="event.open" full-width offset-x>
                    <template v-slot:activator="{ on }">
                      <div
                        v-if="!event.time"
                        v-ripple
                        class="my-event green"
                        v-on="on"
                        v-html="event.name"
                      ></div>
                    </template>
                    <v-card min-width="350px" flat>
                      <v-toolbar color="primary" dark>
                        <v-btn icon>
                          <v-icon>edit</v-icon>
                        </v-btn>
                        <v-toolbar-title v-html="event.name"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>

                      <v-card-title primary-title>
                        <p>Slot: {{event.max}}</p>
                      </v-card-title>
                      <v-card-actions>
                        <p>Description: {{event.description}}</p>
                      </v-card-actions>
                      <v-card-actions>
                        <v-btn flat color="secondary">Cancel</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </template>
              </template>
            </v-calendar>
          </v-sheet>
        </v-flex>
        <div>
          <v-btn @click="$refs.calendar.prev()">
            <v-icon dark left>keyboard_arrow_left</v-icon>Prev
          </v-btn>
          <v-btn @click="$refs.calendar.next()">
            Next
            <v-icon right dark>keyboard_arrow_right</v-icon>
          </v-btn>
        </div>
      </v-layout>
    </v-card>

    <v-card class="elevation-5 cardmessage mt-4">
      <v-toolbar color="grey darken-4" dark>
        <v-toolbar-title>Add a schedule</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>check_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-layout row wrap>
        <v-flex xs12 class="pa-3">
          <v-card class="mx-auto">
            <v-form ref="form" v-model="form" class="pa-2">
              <v-select v-model="schedForm.name" :items="category" label="Schedule Type"></v-select>
              <v-slider v-model="schedForm.max" :label="`Attendies: ` + schedForm.max"></v-slider>
              <v-date-picker v-model="schedForm.date" color="green lighten-1"></v-date-picker>
              <v-textarea
                v-model="schedForm.description"
                auto-grow
                color="green"
                label="Description"
                rows="2"
                class="mt-5"
              ></v-textarea>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat @click="$refs.form.reset(), schedForm.max = 0">Clear</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!form"
                :loading="isLoading"
                class="white--text"
                color="deep-purple accent-4"
                depressed
                @click="createShedule()"
              >Create</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Schedule",

  data() {
    return {
      schedForm: {
        schedType: "Training",
        name: null,
        description: null,
        picker: null,
        max: 0,
        status: "In-coming",
        open: false
      },
      form: false,
      isLoading: false,

      category: [
        "----Emergency Trainings----",
        "ACLS (ASHI)",
        "ACLS (AHA)",
        "BLS (ASHI)",
        "BLS (AHA)",
        "BLS with AED",
        "DRRM",
        "Earthquake Awareness and Emergency Management",
        "First Aid",
        "High Angle and Rope Rescue",
        "ICS",
        "Search and Rescue",
        "------Occupation Safety and Health------",
        "BOSH ",
        "Behavior Based Safety",
        "Chemical Safety",
        "Confined Space Entry Training",
        "COSH",
        "HAZMAT",
        "LCM",
        "Risk Management",
        "SPA",
        "TTT",
        "WAH"
      ],
      rules: {
        email: v => (v || "").match(/@/) || "Please enter a valid email",
        length: len => v =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        password: v =>
          (v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
        required: v => !!v || "This field is required"
      },
      start: "07-24-2019",
      today: "07-24-2019",
      events: [],
      items: [
        {
          icon: "fas fa-first-aid",
          iconClass: "primary lighten-1 white--text",
          title: "ASHI",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "fas fa-medkit",
          iconClass: "primary lighten-1 white--text",
          title: "AHA",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "fas fa-briefcase",
          iconClass: "primary lighten-1 white--text",
          title: "OSH",
          subtitle: "Jan 28, 2014"
        }
      ],
      items2: [
        {
          icon: "fas fa-door-closed",
          iconClass: "red white--text",
          title: "Fully Booked"
        },
        {
          icon: "fas fa-door-open",
          iconClass: "green white--text",
          title: "Available"
        },
        {
          icon: "fas fa-door-open",
          iconClass: "yellow white--text",
          title: "TBA"
        }
      ]
    };
  },
  created() {
    let ref = db.collection("schedule").orderBy("picker");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.events.push({
            id: doc.id,
            name: doc.data().name,
            date: doc.data().date,
            max: doc.data().max,
            description: doc.data().description,
            schedType: doc.data().schedType,
            status: doc.data().status
          });
        }
      });
    });
  },
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    createShedule() {
      db.collection("schedule")
        .add(this.schedForm)
        .then(docRef => {
          this.$refs.form.reset();
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
