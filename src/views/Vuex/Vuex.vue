<template>
  <div>
    {{ count }}
    {{ city }}
    {{ getCount }}
    <br />
    <button @click="handle4()">点我</button>
    <button @click="handle5()">点我</button>
  </div>
</template>
<script>
//按需导入mapState
import { mapState } from "vuex";
// 按需导入mapMutations;
import { mapMutations } from "vuex";
//按需盗取mapActions
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    //1.state直接获取对应的数据值
    console.log(this.$store.state.count);
    console.log(this.$store.state.city);
  },
  computed: {
    ...mapState(["count", "city"]),
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["addAsync"]),

    // handle1: function() {
    //   this.$store.commit("add", 13);
    // },
    handle2: function () {
      this.add(13);
    },
    handle3: function () {
      this.$store.dispatch("addAsync", 13);
    },
    handle4: function () {
      this.addAsync(13);
    },
    handle5: function () {
      console.log(this.$store.getters.getCount);
    },
    getCityName: function (state, positionName) {
      state.positionCity = positionName;
    },
    getCityId: function (state, cityId) {
      localStorage.setItem("cityId", cityId);
      state.cityId = cityId;
    },
    clickCityId: function (state, cityId) {
      localStorage.setItem("clickId", cityId);
      state.clickCityId = cityId;
    },
  },
};
</script>
