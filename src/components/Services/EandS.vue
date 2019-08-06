<template>
  <div class="emergency-safety">
    <v-container fluid>
      <h3 class="grey--text ml-2 my-3">Emergency Medical and Technical Rescue</h3>
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 sm6 md3 class="pa-3" v-for="(data, index) in servicesData" :key="index">
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 15 : 2}`">
              <v-img :src="data.img" contain></v-img>

              <v-card-title primary-title>
                <div>
                  <h5 class="courseTitle">{{data.name}}</h5>
                  <div class="my-1" v-if="data.space">
                    <br />
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-dialog v-model="data.dialog" width="1000">
                  <template v-slot:activator="{ on }">
                    <v-btn color="success" dark v-on="on">Learn More</v-btn>
                  </template>

                  <v-card>
                    <div v-for="(outline, index) in data.courseOutline" :key="index">
                      <v-img width :src="outline.src" contain></v-img>
                    </div>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" flat @click="data.dialog = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "EandS",
  data() {
    return {
      servicesData: [
        {
          name: `Basic Life Support (AHA) `,
          space: false,
          dialog: false,
          img: require("@/assets/trainings/bls.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/blsAha_co.png")
            }
          ]
        },
        {
          name: "Advance Cardiovascular Life Support ACLS (AHA)",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/acls.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/aclsAha_co.png")
            }
          ]
        },
        {
          name: "Advance Cardiovascular Life Support (ASHI)",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/ashiAcls.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/ashiAcls_co.png")
            }
          ]
        },
        {
          name: "Basic Life Support (ASHI)",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/ashiBls.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/ashiBls_co.png")
            }
          ]
        },
        {
          name: "Basic Life Support (PHA)",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/blsPha.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/blsPha2.png")
            },
            {
              src: require("@/assets/trainings/course_outline/blsPha3.png")
            }
          ]
        },
        {
          name: "Basic First Aid",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/firstAid.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/firstAid1.png")
            },
            {
              src: require("@/assets/trainings/course_outline/firstAid2.png")
            }
          ]
        },
        {
          name: "Basic Life Support with AED",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/blsAed.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/blsAed2.png")
            },
            {
              src: require("@/assets/trainings/course_outline/blsAed3.png")
            }
          ]
        },
        {
          name: "Incident Command System (ICS)",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/ics.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/ics.png")
            }
          ]
        },
        {
          name: "Earthquake Awareness and Emergency Management",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/earthquake.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/earthquake1.png")
            },
            {
              src: require("@/assets/trainings/course_outline/earthquake2.png")
            },
            {
              src: require("@/assets/trainings/course_outline/earthquake3.png")
            },
            {
              src: require("@/assets/trainings/course_outline/earthquake4.png")
            },
            {
              src: require("@/assets/trainings/course_outline/earthquake5.png")
            }
          ]
        },

        {
          name: "Disaster Risk Reduction Management",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/disasterRisk.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/drrm.png")
            }
          ]
        },
        {
          name: "Search and Rescue",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/searchRescue.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/drrm.png")
            }
          ]
        },
        {
          name: "High Angle and Rope Rescue",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/highAngle.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/drrm.png")
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.courseTitle {
  font-size: 15px;
}
</style>


<!---
    Notes:
    wlang outine ang search and rescue pati rope rescue




----->