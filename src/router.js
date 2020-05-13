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
import Inquiries from "./views/Inquiries.vue";
import Bookings from "./views/Bookings.vue";
import Schedule from "./views/Schedule.vue";
import AdminSettings from "./views/AdminSettings.vue";
import BookedList from "./views/BookedList.vue";
import ViewMessage from "./views/ViewMessage.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
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
      component: AdminDashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        { path: "", component: Inquiries },
        {
          path: "inquiries",
          name: "inquiries",
          component: Inquiries
        },

        {
          path: "bookings",
          name: "bookings",
          component: Bookings
        },
        {
          path: "schedule",
          name: "schedule",
          component: Schedule
        },
        {
          path: "adminSettings",
          name: "adminSettings",
          component: AdminSettings
        },
        {
          path: "bookedList/:id",
          name: "bookedList",
          component: BookedList
        },
        {
          path: "viewMessage/:id",
          name: "viewMessage",
          component: ViewMessage,
          props: true
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next({ name: "bgcsAdmin" });
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
