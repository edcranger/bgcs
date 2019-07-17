import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Clients from "./views/Clients.vue";

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
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/clients",
      name: "clients",
      component: Clients
    }
  ]
});
