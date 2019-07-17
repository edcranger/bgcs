<template>
  <div class="services grey lighten-3">
    <Trainings />
    <Footer />
  </div>
</template>

<script>
import Trainings from "@/components/Services/Trainings";
import Footer from "@/components/Footer";
export default {
  name: "Services",
  data() {
    return {
      bol: true
    };
  },
  components: {
    Trainings,
    Footer
  }
};
</script>
<style >
</style>

