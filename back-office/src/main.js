import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import store from "./store/Store";
import router from "./router/Router";
import "./assets/scss/style.scss";
import App from "./App.vue";
import VueFeather from "vue-feather";
import InstantSearch from "vue-instantsearch";
import * as VueGoogleMaps from "vue2-google-maps"
import 'vue-multiselect/dist/vue-multiselect.min.css'
// i18n
import i18n from './i18n/i18n.js'
import "vue-hljs/dist/style.css";
Vue.use(VueFeather);

Vue.config.productionTip = false;

import vueHljs from "vue-hljs";
import hljs from "highlight.js";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAiMaPeI8kChr7oXYv8ymsQ0HWs59Lg5ag",
        libraries: 'places,directions'
    },
    installComponents: true,
});
//use
Vue.use(vueHljs, { hljs });
Vue.use(InstantSearch);
new Vue({ store, router,i18n, render: (h) => h(App) }).$mount("#app");
