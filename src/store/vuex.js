import Vue from "vue";
import Vuex from "vuex";

//在vue中使用vuex
Vue.use(Vuex);

//创建Store用于存储数据
export default new Vuex.Store({
  state: {
    //提供一个数据源
    count: 0,
    city: "全国",
    _token: "",
    //如果有更多的数据需存储记这些就完了
  },
  // 方法,用于变更store中的数据
  mutations: {
    add: function (state, step) {
      state.count += step;
    },
    setCity: function (state, cityName) {
      state.city = cityName;
    },
    updateToken: function (state, _token) {
      state._token = _token;
      localStorage.setItem("_token", _token)
    }
  },
  actions: {
    addAsync: function (context, step) {
      setTimeout(() => {
        context.commit("add", step);
      }, 3000);
    },
    getCityName: function (state, positionName) {
      state.positionCity = positionName;
    },
  },
  getters: {
    getCount: function (state) {
      return "当前总数是" + state.count;
    },
  },
});