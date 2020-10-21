import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AMap from "vue-amap";
import VueLazyload from "vue-lazyload";
//以内element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '6bece30dae25be7dae1f7fa642b9dd78',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation'],
  v: '1.4.4',
});

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: "https://2url.cc/1OwrB",
});

Vue.prototype.eventBus = new Vue();
//导入vuex的store对象
import store from "@/store/vuex";

//同步一下localStorage数据到Vuex
let _token = localStorage.getItem("_token");
if (_token) {
  store.commit("updateToken", _token);
}



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");