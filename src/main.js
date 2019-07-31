import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue-lazyload";

require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

Vue.use(VueLazyLoad);
Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

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
