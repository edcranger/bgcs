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
        <v-flex xs12 class="pa-3">
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
        <v-btn @click="$refs.calendar.prev()">
          <v-icon dark left>keyboard_arrow_left</v-icon>Prev
        </v-btn>
        <v-btn @click="$refs.calendar.next()">
          Next
          <v-icon right dark>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Schedule",
  data() {
    return {
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
