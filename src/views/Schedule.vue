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
          <v-sheet>
            <div class="text-xs-center">
              <v-layout align-center justify-space-between row fill-height>
                <v-flex xs4>
                  <v-btn @click="$refs.calendar.prev()" class="my-1">
                    <v-icon dark left>keyboard_arrow_left</v-icon>Prev
                  </v-btn>
                </v-flex>
                <v-flex xs4>
                  <h4>{{ this.start | moment("MMMM") }}</h4>
                </v-flex>
                <v-flex xs4>
                  <v-btn @click="$refs.calendar.next()">
                    Next
                    <v-icon right dark>keyboard_arrow_right</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </div>
            <v-calendar ref="calendar" :value="today" color="primary" v-model="start">
              <template v-slot:day="{ date }">
                <template v-for="event in eventsMap[date]">
                  <v-menu :key="event.id" v-model="event.open" full-width offset-x>
                    <template v-slot:activator="{ on }">
                      <div
                        v-if="!event.time"
                        v-ripple
                        :class="[remainingSlot(event.id,event.max) != 'Fully Booked' ? 'primary my-event'  : 'error']"
                        v-on="on"
                        v-html="event.name"
                      ></div>
                    </template>
                    <v-card width="100%" flat>
                      <v-toolbar
                        :class="[remainingSlot(event.id,event.max) != 'Fully Booked' ? 'primary' : 'error']"
                        dark
                      >
                        <v-btn icon>
                          <v-icon>edit</v-icon>
                        </v-btn>
                        <v-toolbar-title v-html="event.name"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <!-- To delete all the bookings add firebase function then match it with the parent ID(ID) -->
                        <v-btn icon @click="deleteSchedule(event.id)">
                          <v-icon>delete</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </v-toolbar>

                      <v-card-title primary-title>
                        <strong>{{remainingSlot(event.id,event.max)}}</strong>
                      </v-card-title>
                      <v-card-actions>
                        <p>Description: {{event.description}}</p>
                      </v-card-actions>
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
        </v-flex>
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
        <v-flex xs12>
          <v-card class="mx-auto">
            <v-form ref="form" v-model="form" class="pa-4">
              <v-select
                v-model="schedForm.name"
                :rules="[rules.required]"
                :items="category"
                label="Schedule Type"
              ></v-select>
              <v-slider
                v-model="schedForm.max"
                :rules="[rules.required]"
                :label="`Attendies: ` + schedForm.max"
              ></v-slider>
              <div class="text-xs-center">
                <v-date-picker width="100%" v-model="schedForm.date" color="green lighten-1"></v-date-picker>
              </div>

              <v-textarea
                v-model="schedForm.description"
                auto-grow
                color="green"
                :rules="[rules.length(10),rules.required]"
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
import BookingForm from "@/components/Home/BookingForm";
import moment from "moment";
import db from "@/firebase/init";
export default {
  name: "Schedule",
  components: {
    BookingForm
  },

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
        "WAH",
        "AHA-ACLS",
        "AHA-BLS",
        "AHA - ACLS|BLS",
        "ASHI- ACLS",
        "ASHI - BLS",
        "ASHI - ACLS|BLS",
        "PHA - BLS",
        "PHA - BLS with AED",
        "BLS (PHA) - ACLS (AHA)",
        "BLS (PHA) - ACLS (ASHI)",
        "First Aid and Basic Life Support (PHA)",
        "First Aid and Basic Life Support with AED (PHA)",
        "ILCOR Basic First Aid",
        "ILCOR Basic Life Support",
        "ILCOR First Aid and Basic Life Support  ",
        "BOSH",
        "COSH",
        "Chemical Safety",
        "Confined Space Entry",
        "HAZMAT",
        "Loss Control Management (LCM)",
        "Mandatory 8H Safety and Health",
        "Behavior Based Safety ",
        "Risk Management",
        "Safety Program Audit (SPA)",
        "SO1 (8hours+2hours TOT)",
        "Train the Trainer",
        "Working at Height",
        "Disaster Risk Reduction Management",
        "DRRM-ICS-SAR",
        "Earthquake Awarness and Emergency Management",
        "Earthquake -Fire Drill with ICS",
        "Search and Rescue",
        "Technical Rope Rescue",
        "Team Building"
      ],
      rules: {
        length: len => v =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        required: v => !!v || "This field is required"
      },
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
  created() {
    let ref = db.collection("schedule").orderBy("picker");
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
        .then(() => {
          this.$refs.form.reset();
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
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
    },
    deleteSchedule(id) {
      this.$wwal
        .fire({
          title: "Are you sure you want to delete this schedule?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.scheduleCensus.forEach(sched => {
              if (sched.trainingId == id) {
                // eslint-disable-next-line no-console

                db.collection("bookings")
                  .doc(sched.id)
                  .delete()
                  .then(() => {});
              }
            });

            db.collection("schedule")
              .doc(id)
              .delete()
              .then(() => {
                this.events = this.events.filter(event => {
                  return event.id != id;
                });
              });

            this.$swal.fire(
              "Deleted!",
              "Schedule has been deleted.",
              "success"
            );
          }
        });
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


