import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/vuetify";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue-lazyload";
import firebase from "firebase";

require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

Vue.use(VueLazyLoad);
Vue.use(require("vue-moment"));

let app = null;

Vue.config.productionTip = false;

//wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {
  //init app if not already created
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

/* 
No Outline
1.Search and Rescue
2.High Angle and Rope Rescue
3.Train the Trainer (TTT)
4.Risk Management
5.Behavior Based Safety
6.HAZMAT
7.Chemical Safety

*/
