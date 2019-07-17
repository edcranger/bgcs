<template>
  <div class="services">
    <Trainings />
  </div>
</template>

<script>
import Trainings from "@/components/Services/Trainings";
export default {
  name: "Services",
  data() {
    return {
      bol: true
    };
  },
  components: {
    Trainings
  }
};
</script>
<style >
</style>

