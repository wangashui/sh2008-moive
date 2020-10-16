<template>
  <div>
    <FilmListTopNav :class="fixed ? 'fixed' : ''"></FilmListTopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import FilmListTopNav from "@/components/FilmListTopNav";
import axios from "axios";
export default {
  //注册组件
  components: {
    FilmListTopNav,
  },
  data() {
    return {
      fixed: false,
    };
  },
  mounted() {
    var _this = this;
    setdir();
    function setdir() {
      if (navigator.geolocation) {
        let q = navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
    }
    //定位数据获取成功响应
    function onSuccess(position) {
      let wei = position.coords.latitude;
      let jing = position.coords.longitude;
      axios
        .get(`https://api.i-lynn.cn/poi?location=${jing},${wei}`)
        .then((ret) => {
          _this.$store.commit(
            "setCity",
            ret.data.regeocode.addressComponent.province,
            console.log(ret)
          );
        });
    }
    //定位数据获取失败响应
    function onError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("您拒绝对获取地理位置的请求");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("位置信息是不可用的");
          break;
        case error.TIMEOUT:
          alert("请求您的地理位置超时");
          break;
        case error.UNKNOWN_ERROR:
          alert("未知错误");
          break;
      }
    }
    window.addEventListener(
      "scroll",
      (e) => {
        let top = document.documentElement.scrollTop;
        if (top > 80) {
          this.fixed = true;
        } else {
          this.fixed = false;
        }
      },
      true
    );
  },
};
</script>

<style lang="scss">
.fixed {
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 98;
}
</style>
