<template>
  <div class="emergency-safety mb-5">
    <v-container fluid>
      <h3 class="grey--text ml-2 my-3">Occupational Safety Health (OSH)</h3>
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 sm6 md3 class="pa-3" v-for="(data, index) in servicesData" :key="index">
          <v-card>
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
              <v-dialog v-model="data.dialog" width="1500">
                <template v-slot:activator="{ on }">
                  <v-btn color="error lighten-2" dark v-on="on">Learn More</v-btn>
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Osh",
  data() {
    return {
      servicesData: [
        {
          name: `Basic Occupational Safety and Health (BOSH) `,
          space: false,
          dialog: false,
          img: require("@/assets/trainings/bosh.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/blsAha_co.png")
            }
          ]
        },
        {
          name: "Construction Occupational Safety and Health (COSH)",
          dialog: false,
          space: false,
          img: require("@/assets/trainings/cosh.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/aclsAha_co.png")
            }
          ]
        },
        {
          name: "Train the Trainer (TTT)",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/trainTrainer.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/ashiAcls_co.png")
            }
          ]
        },
        {
          name: "Working at Heights (WAT)",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/wat.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/ashiBls_co.png")
            }
          ]
        },
        {
          name: "Confined Space Entry Training",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/confined.png"),
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
          name: "Loss Control Management (LCM)",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/loss.png"),
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
          name: "Safety Program Audit (SPA)",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/safetyAudit.png"),
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
          name: "Risk Management",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/risk.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/ics.png")
            }
          ]
        },
        {
          name: "Behavior Based Safety",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/behavior.png"),
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
          name: "HAZMAT",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/hazmat.png"),
          courseOutline: [
            {
              src: require("@/assets/trainings/course_outline/drrm.png")
            }
          ]
        },
        {
          name: "Chemical Safety",
          dialog: false,
          space: true,
          img: require("@/assets/trainings/chemical.png"),
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