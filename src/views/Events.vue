<template>
  <div class="services grey lighten-3">
    <EventPlanning />
    <BelowTheLine class="my-2" />
    <Creatives />
    <Gallery2 />
    <Footer />
  </div>
</template>

<script>
import EventPlanning from "@/components/Services/EventPlanning";
import Creatives from "@/components/Services/Creatives";
import BelowTheLine from "@/components/Services/BelowTheLine";
import Gallery2 from "@/components/Services/Gallery2";
import Footer from "@/components/Footer";
export default {
  name: "Events",
  data() {
    return {
      bol: true
    };
  },
  components: {
    EventPlanning,
    Creatives,
    BelowTheLine,
    Gallery2,
    Footer
  }
};
</script>
<style >
</style>

