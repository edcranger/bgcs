<template>
  <div class="booking mb-3">
    <h1 class="display-3 text-xs-center font-weight-medium">Training Schedule</h1>
    <p class="text-xs-center font-weight-medium">Check Out the available dates</p>
    <v-container>
      <v-layout row wrap class="elevation-3">
        <v-toolbar color dark>
          <i class="fas fa-calendar-alt fa-2x"></i>
          <v-toolbar-title>Book a course</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-flex xs12 md3>
          <div id="e3" class="px-2 py-2">
            <v-layout row wrap>
              <v-flex xs6 md12 class="pa-1">
                <v-list two-line subheader>
                  <v-subheader>Training</v-subheader>

                  <v-list-tile v-for="item in items" :key="item.title" avatar>
                    <v-list-tile-avatar>
                      <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs6 md12 class="pa-1">
                <v-list two-line subheader>
                  <v-subheader>Legend</v-subheader>

                  <v-list-tile v-for="item in items2" :key="item.title" avatar>
                    <v-list-tile-avatar>
                      <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <v-flex xs12 md9 class="pa-1 py-3">
          <v-sheet height="500">
            <v-calendar :now="today" :value="today" color="primary">
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
                      <v-card-actions>
                        <BookingForm />
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
      </v-layout>
      <br />
    </v-container>
  </div>
</template>

<script>
import BookingForm from "@/components/Home/BookingForm";
export default {
  name: "Booking",
  components: {
    BookingForm
  },
  data() {
    return {
      today: "2019-07-11",
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
          title: "New Year",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-22",
          open: false
        },
        {
          title: "Conference",
          details: `<strong>(${3})</strong> Slots Left for the training`,
          date: "2019-07-21",
          open: false
        },
        {
          title: "Hackathon",
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
  },
  methods: {
    open(event) {
      alert(event.title);
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
