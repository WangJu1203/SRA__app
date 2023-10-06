import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "./FontAwesome/fontawesome";
import VueRouter from "vue-router";
import Routes from "../src/router/index";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: Routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
