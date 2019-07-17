<template>
  <div class="trainings">
    <!-- <v-container fluid>
      <h1 class="display-1 text-xs-left font-weight-medium my-5">American Heart Association</h1>

      <v-layout align-center justify-space-between row fill-height wrap>

        <v-flex xs12 md6 class>
          <v-img height="300" :src="require('@/assets/trainings/bls.png')" contain></v-img>
        </v-flex>
        <v-flex xs12 md6 class="mt-4 px-4">
          <h2>BLS</h2>
          <p>ACLS is an advanced, instructor-led classroom course that highlights the importance of team dynamics and communication, systems of care and immediate post-cardiac-arrest care. It also covers airway management and related pharmacology. In this course, skills are taught in large, group sessions and small, group learning and testing stations where case-based scenarios are presented.</p>
          <p>ACLS is designed for healthcare professionals who either direct or participate in the management of cardiopulmonary arrest and other cardiovascular emergencies. This includes personnel in emergency response, emergency medicine, intensive care and critical care units.</p>
          <v-dialog v-model="dialog1" width="1000">
            <template v-slot:activator="{ on }">
              <v-btn color="primary lighten-2" dark v-on="on">Learn More</v-btn>
            </template>

            <v-card>
              <v-img width :src="require('@/assets/trainings/blsAha_co.png')" contain></v-img>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog1 = false">I accept</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>


        <v-flex xs12 md6 class="mt-5">
          <v-img height="300" :src="require('@/assets/trainings/acls.png')" contain></v-img>
        </v-flex>
        <v-flex xs12 md6 class="mt-4 px-4">
          <h2>ACLS</h2>
          <p>ACLS is an advanced, instructor-led classroom course that highlights the importance of team dynamics and communication, systems of care and immediate post-cardiac-arrest care. It also covers airway management and related pharmacology. In this course, skills are taught in large, group sessions and small, group learning and testing stations where case-based scenarios are presented.</p>
          <p>ACLS is designed for healthcare professionals who either direct or participate in the management of cardiopulmonary arrest and other cardiovascular emergencies. This includes personnel in emergency response, emergency medicine, intensive care and critical care units.</p>

          <v-dialog v-model="dialog2" width="1000">
            <template v-slot:activator="{ on }">
              <v-btn color="error lighten-2" dark v-on="on">Learn More</v-btn>
            </template>

            <v-card>
              <v-img width :src="require('@/assets/trainings/aclsAha_co.png')" contain></v-img>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog2 = false">I accept</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>-->
  </div>
</template>

<script>
export default {
  name: "Emt",
  data() {
    return {
      dialog1: false,
      dialog2: false
    };
  }
};
</script>

<style>
</style>
