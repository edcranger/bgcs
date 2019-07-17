import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue-lazyload";

require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

Vue.use(VueLazyLoad);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
