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
                  <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                    <template v-slot:activator="{ on }">
                      <div
                        v-if="!event.time"
                        v-ripple
                        class="my-event green"
                        v-on="on"
                        v-html="event.title"
                      ></div>
                    </template>
                    <v-card min-width="350px" flat>
                      <v-toolbar color="primary" dark>
                        <v-btn icon>
                          <v-icon>edit</v-icon>
                        </v-btn>
                        <v-toolbar-title v-html="event.title"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-card-title primary-title>
                        <span v-html="event.details"></span>
                      </v-card-title>
                      <v-card-actions></v-card-actions>
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
              <v-select v-model="name" :items="category" label="Schedule Type"></v-select>
              <v-slider v-model="max" :label="`Attendies: ` + max"></v-slider>
              <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
              <v-textarea
                v-model="description"
                auto-grow
                color="green"
                label="Description"
                rows="2"
                class="mt-5"
              ></v-textarea>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat @click="$refs.form.reset(), max = 0">Clear</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!form"
                :loading="isLoading"
                class="white--text"
                color="deep-purple accent-4"
                depressed
              >Create</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Schedule",

  data() {
    return {
      name: null,
      agreement: false,
      description: null,
      dialog: false,
      picker: undefined,
      form: false,
      isLoading: false,
      max: 0,
      picker: new Date().toISOString().substr(0, 10),
      password: undefined,
      phone: undefined,
      category: [
        "----Emergency Trainings----",
        "Advance Cardiovascular Life Support ACLS (ASHI)",
        "Advance Cardiovascular Life Support ACLS (AHA)",
        "Basic Life Support (ASHI)",
        "Basic Life Support (AHA)",
        "Basic Life Support with AED",
        "Disaster Risk Reduction Management",
        "Earthquake Awareness and Emergency Management",
        "First Aid",
        "High Angle and Rope Rescue",
        "Incident Command System (ICS)",
        "Search and Rescue",
        "------Occupation Safety and Health------",
        "Basic Occupational Safety and Health (BOSH) ",
        "Behavior Based Safety",
        "Chemical Safety",
        "Confined Space Entry Training",
        "Construction Occupational Safety and Health (COSH)",
        "HAZMAT",
        "Loss Control Management (LCM)",
        "Risk Management",
        "Safety Program Audit (SPA)",
        "Train the Trainer (TTT)",
        "Working at Heights (WAT)"
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
      events: [
        {
          title: "BLS (AHA)",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-11",
          open: false
        },
        {
          title: "ACLS(AHA)",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-12",
          open: false
        },
        {
          title: "BLS(ASHI)",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-13",
          open: false
        },
        {
          title: "ACLS(ASHI)",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-14",
          open: false
        },
        {
          title: "ACLS",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-02",
          open: false
        },
        {
          title: "OSH",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-22",
          open: false
        },
        {
          title: "OSH",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-21",
          open: false
        },
        {
          title: "OSH",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-23",
          open: false
        },
        {
          title: "OSH",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-25",
          open: false
        }
      ],
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
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  }
};
</script>

<style>
</style>
