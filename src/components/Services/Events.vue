<template>
  <div class="events">
    <EventPlanning />
    <BelowTheLine class="my-2" />
    <Creatives />
    <Gallery2 />
  </div>
</template>

<script>
import EventPlanning from "@/components/Services/EventPlanning";
import Creatives from "@/components/Services/Creatives";
import BelowTheLine from "@/components/Services/BelowTheLine";
import Gallery2 from "@/components/Services/Gallery2";
export default {
  name: "Events",
  components: {
    EventPlanning,
    BelowTheLine,
    Creatives,
    Gallery2
  }
};
</script>

<style>
</style>
