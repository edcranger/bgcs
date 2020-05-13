<template>
  <div class="booking mb-3">
    <h1 class="display-3 text-xs-center font-weight-medium">Training Schedule</h1>
    <p class="text-xs-center font-weight-medium">Check Out the available dates</p>
    <v-container fluid>
      <v-layout row wrap class="elevation-3">
        <v-toolbar color dark>
          <i class="fas fa-calendar-alt fa-2x"></i>
          <v-toolbar-title>Book a course</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-flex xs12 md12 class="hidden-sm-and-down">
          <div id="e3" class="px-2">
            <v-layout row wrap>
              <v-flex xs6 md6 class="pa-1">
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
              <v-flex xs6 md6 class="pa-1">
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
        <!------------Calendar starts here--------------->

        <v-flex xs12 md12 class>
          <v-container fluid>
            <v-sheet>
              <div class="text-xs-center">
                <v-layout align-center justify-space-between row fill-height>
                  <v-flex xs4>
                    <v-btn @click="$refs.calendar.prev()" class="my-1">
                      <v-icon dark left>keyboard_arrow_left</v-icon>Prev
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <h3>{{ this.start | moment("MMMM") }}</h3>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn @click="$refs.calendar.next()">
                      Next
                      <v-icon right dark>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
              <v-calendar ref="calendar" v-model="start" :value="today" color="primary">
                <template v-slot:day="{ date }">
                  <template v-for="event in eventsMap[date]">
                    <v-menu :key="event.name" v-model="event.open" full-width offset-x>
                      <template v-slot:activator="{ on }">
                        <div
                          v-if="!event.time"
                          v-ripple
                          :class="[remainingSlot(event.id,event.max) != 'Fully Booked' ? 'primary my-event'  : 'error']"
                          dark
                          v-on="on"
                          v-html="event.name"
                        ></div>
                      </template>
                      <v-card width="100%" flat>
                        <v-toolbar
                          :class="[remainingSlot(event.id,event.max) != 'Fully Booked' ? 'primary' : 'error']"
                          dark
                        >
                          <!-- <v-btn icon>
                            <v-icon>edit</v-icon>
                          </v-btn>-->
                          <v-toolbar-title>
                            <h6>{{event.name}}</h6>
                          </v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>favorite</v-icon>
                          </v-btn>
                          <!-- <v-btn icon>
                            <v-icon>more_vert</v-icon>
                          </v-btn>-->
                        </v-toolbar>
                        <v-card-title primary-title>
                          <span>
                            <strong>{{remainingSlot(event.id,event.max)}}</strong>
                          </span>
                        </v-card-title>
                        <v-card-actions>
                          <BookingForm
                            v-if="remainingSlot(event.id,event.max) != 'Fully Booked'"
                            :eventId="event.id"
                          />
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
          </v-container>
        </v-flex>
      </v-layout>
      <br />
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
import BookingForm from "@/components/Home/BookingForm";
export default {
  name: "Booking",
  components: {
    BookingForm
  },
  data() {
    return {
      activeClass: "primary",
      errorClass: "error",
      start: moment().format("MM-D-YYYY"),
      today: moment().format("MM-D-YYYY"),
      events: [],
      scheduleCensus: [],
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
    },
    remainingSlot: function(id, max) {
      let number = 0;
      let result;
      this.scheduleCensus.forEach(census => {
        if (census.trainingId == id && census.status == "confirmed") {
          number++;
        }
      });
      result = max - number;

      if (result == 0) {
        return "Fully Booked";
      } else {
        return `Available slot  ${result}`;
      }
    }
  },
  created() {
    let ref = db.collection("schedule");
    let ref2 = db.collection("bookings");

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

    ref2.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.scheduleCensus.push({
            id: doc.id,
            trainingId: doc.data().idOfTraining,
            status: doc.data().status
          });
        }
      });
    });
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
