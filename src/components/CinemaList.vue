<template>
  <div :style="{ height: height + 'px' }" class="cinema-list-wrap scroll">
    <div>
      <cinemaBanner></cinemaBanner>
      <ul class="cinema-list">
        <li
          class="cinema-list-item"
          v-for="(cinema, index) in cinema"
          :key="index"
        >
          <a
            href="JavaScript:;"
            class="cinema-item-wrap"
            @click="getCinemaId(cinema.cinemaId)"
          >
            <div class="cinema-list-left">
              <span class="cinema-name">{{ cinema.name }}</span>
              <span class="cinema-address">{{ cinema.address }}</span>
            </div>
            <div class="cinema-list-right">
              <div>
                <span class="cinema-price">
                  <i>￥</i>
                  <span class="interge" style="font-size: 15px">{{
                    cinema.lowPrice | Priceprocessing
                  }}</span>
                </span>
                <span class="upon">起</span>
              </div>
              <strong>距离未知</strong>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { cinemaListData } from "@/api/api";
import cinemaBanner from "./CinemaBanner";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      cinema: {},
      height: 0,
      bs: null,
    };
  },
  components: {
    cinemaBanner,
  },
  async mounted() {
    let ret = await cinemaListData();
    this.cinema = ret.data.data.cinemas;
  },
  filters: {
    Priceprocessing: function (value) {
      let price = value / 100;
      return price;
    },
  },
  updated() {
    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
    });
    this.bs.on("pullingUp", () => {
      //获取数据
      //   this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      //获取数据
      //   this.getData();
      this.bs.finishPullDown();
    });
  },
  methods: {
    getCinemaId: function (cinemaId) {
      this.$router.push({ name: "cinemaDetail", params: { cinemaId } });
    },
  },
};
</script>
<style lang="scss">
// .scroll {
//   overflow: hidden;
// }
.cinema-list-wrap {
  position: fixed;
  top: 90px;
  // height: 22338px !important;
  padding-bottom: 49px;
  // overflow: hidden;
  .cinema-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .cinema-list-item {
      background-color: #fff;
      padding: 15px;
      overflow: hidden;
      border-bottom: 1px solid #ededed;
      .cinema-item-wrap {
        text-decoration: none;
        .cinema-list-left {
          width: calc(100% - 65px);
          text-align: left;
          //   padding-right: 15px;
          float: left;
          span {
            display: block;
            white-space: nowrap;
          }
          .cinema-name {
            color: #191a1b;
            font-size: 15px;
            display: block;
          }
          .cinema-address {
            max-width: 80%;
            color: #797d82;
            font-size: 12px;
            margin-top: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .cinema-list-right {
          width: 70px;
          text-align: center;
          float: right;
          margin-right: -5px;
          color: #ff5f16;
          .cinema-price {
            font-size: 15px;
            height: 0 !important;
            display: inline-table !important;
          }
          .upon {
            font-size: 12px;
          }
          strong {
            font-weight: 400;
            display: block;
            margin-top: 5px;
            font-size: 11px;
            color: #797d82;
          }
        }
      }
    }
  }
}
</style>
