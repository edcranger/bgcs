import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Trainings from "./views/Trainings.vue";
import Events from "./views/Events.vue";
import Clients from "./views/Clients.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import BgcsAdmin from "./views/BgcsAdmin.vue";
import AdminDashboard from "./views/AdminDashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/trainings",
      name: "trainings",
      component: Trainings
    },
    {
      path: "/events",
      name: "events",
      component: Events
    },
    {
      path: "/clients",
      name: "clients",
      component: Clients
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contactUs",
      name: "contact",
      component: Contact
    },
    {
      path: "/bgcsAdmin",
      name: "bgcsAdmin",
      component: BgcsAdmin
    },
    {
      path: "/adminDashboard",
      name: "adminDashboard",
      component: AdminDashboard
    }
  ]
});
