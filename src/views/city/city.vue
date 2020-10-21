<template>
  <div>
    <div class="header">
      <div class="left">
        <i class="iconfont icon-tubiaoguifan2" style="font-size: 19px"></i>
      </div>
      <div class="title">当前城市 -</div>
    </div>
    <van-search v-model="value" placeholder="输入城市名或拼音" />
    <van-index-bar :index-list="indexList" highlight-color="red">
      <div class="recommend-city">
        <div class="gprs-city">
          <div class="city-index-title">GPS定位你所在城市</div>
          <ul class="city-index-detail cleanfix">
            <li class="city-item-detail city-item-detail-gprs">
              <div class="city-item-text">{{ city }}</div>
            </li>
          </ul>
        </div>
        <div class="hot-city">
          <div class="city-index-title">热门城市</div>
          <ul class="city-index-detail cleanfix">
            <li class="city-item-detail">
              <div class="city-item-text">北京</div>
            </li>
            <li class="city-item-detail">
              <div class="city-item-text">上海</div>
            </li>
            <li class="city-item-detail">
              <div class="city-item-text">广州</div>
            </li>
            <li class="city-item-detail">
              <div class="city-item-text">深圳</div>
            </li>
          </ul>
        </div>
      </div>
      <div :style="{ height: height + 'px' }" class="scroll">
        <div>
          <template v-for="(item, index) in dataList">
            <van-index-anchor
              :index="item.index"
              :key="index"
              style="background: #eee"
            />
            <van-cell
              @click="chooseCity(sub.name)"
              v-for="(sub, key) in item.data"
              :title="sub.name"
              :key="key"
            />
          </template>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { cityListData } from "@/api/api";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell, Search } from "vant";
import "vant/lib/index.css";
import BScroll from "better-scroll";
import { mapState } from "vuex";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Search);
export default {
  data() {
    return {
      dataList: [],
      indexList: [],
      height: 0,
      bs: null,
      value: "",
    };
  },
  //进入去掉底部道航
  created() {
    this.eventBus.$emit("footernav", false);
    let getcityName = localStorage.getItem("cityName");
    this.$store.state.city = getcityName;
  },
  //出来的时候显示道航
  beforDestroy() {
    this.eventBus.$emit("footernav", true);
  },
  async mounted() {
    let ret = await cityListData();
    this.dataList = ret[0];
    this.indexList = ret[1];
  },
  methods: {
    chooseCity: function (cityName) {
      //将数据写入vuex中
      this.$store.commit("setCity", cityName);
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapState(["count", "city"]),
  },
  updated() {
    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
    });
  },
};
</script>
<style lang="scss">
.city-index-detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-line-pack: center;
  align-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.city-item-detail {
  width: calc((100vw - 33px) / 3);
  text-align: center;
  padding-bottom: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.city-item-text {
  height: 30px;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 7.5px;
  font-size: 14px;
  color: #191a1b;
}
.recommend-city {
  background-color: #fff;
  padding-left: 15px;
  padding-top: 15px;
}
.city-index-title {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
}
.van-search {
  z-index: 2000;
  height: 49px;
  width: 100vw;
  padding: 9.5px 15px;
  background-color: #f4f4f4;
  position: fixed;
  top: 44px;
}
.van-index-bar {
  margin-top: 93px;
}
.header > div {
  float: left;
  height: 44px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 1000;
  border-bottom: 1px solid #ededed;
  background-color: #fff;
  .left {
    width: 14%;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
  }
}
.header .title {
  width: 72%;
  text-align: center;
  font-size: 17px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #191a1b;
}

.scroll {
  //   overflow: hidden;
}
</style>
