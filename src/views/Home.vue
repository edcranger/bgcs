<template>
  <div class="home">
    <MainHeader />
    <ServiceCategory />
    <Section1 />
    <Section2 />
    <BgcsMainHeader />
    <Accreditation class="my-5" />
    <Booking class="mb-5" />
    <Gallery class="mt-3" />
    <ContactFront />
    <FeaturedClients />
    <Footer />
  </div>
</template>

<script>
import MainHeader from "@/components/Home/MainHeader";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import ServiceCategory from "@/components/Home/ServiceCategory";
import BgcsMainHeader from "@/components/Home/BgcsMainHeader";
import Booking from "@/components/Home/Booking";
import Accreditation from "@/components/Home/Accreditation";
import Gallery from "@/components/Home/Gallery";
import FeaturedClients from "@/components/Home/FeaturedClients";
import ContactFront from "@/components/Home/ContactFront";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    MainHeader,
    BgcsMainHeader,
    Booking,
    Accreditation,
    ServiceCategory,
    Gallery,
    Section1,
    Section2,
    FeaturedClients,
    ContactFront,
    Footer
  }
};
</script>
<style >
</style>