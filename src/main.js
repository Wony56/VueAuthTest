import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import "./plugins/vuetify";
import App from "./App.vue";
import firebase from "firebase";

import { router } from "./router";
import { store } from "./store";

Vue.config.productionTip = false;
Vue.prototype.EventBus = new Vue();

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.logon = true;
      } else {
        this.$store.state.logon = false;
      }
    });
  },
  render: h => h(App)
}).$mount("#app");
