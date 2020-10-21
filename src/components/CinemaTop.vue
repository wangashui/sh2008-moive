<template>
  <header>
    <div class="left">
      <span @click="gocity()">{{ city }}</span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
        width="6px"
        height="3px"
        id="imgcity"
      />
    </div>
    <div class="title">
      <div>影院</div>
    </div>
    <div class="right">
      <img
        data-v-4070467a=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
        width="18px"
        height="18px"
        alt=""
      />
    </div>
  </header>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  created() {
    this.getLocation();
    let getcityName = localStorage.getItem("cityName");
    this.$store.state.city = getcityName;
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    gocity: function () {
      this.$router.push("/city");
    },
    getLocation() {
      let _this = this;
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true, // 设置定位超时时间，默认：无穷大
          timeout: 5000,
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError); // data是具体的定位信息
        // let cityName = ""
        function onComplete(data) {
          // console.log(data);
          let cityId = data.addressComponent.adcode;
          let cityName = data.addressComponent.province;
          let wangxin = localStorage.getItem("clickName");
          if (wangxin == undefined) {
            let posName = localStorage.getItem("cityName");
            this.city1 = posName;
          }
          if (wangxin == null) {
            // this.getCityId(cityId);
            let a = cityName.substr(0, 2);
            localStorage.setItem("cityName", a);
            // let b = this.getCityName(a);
          }
        }
        function onError(data) {
          // 失败 启用 ip定位
          AMap.plugin("AMap.CitySearch", function () {
            var citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(function (status, result) {
              if (status === "complete" && result.info === "OK") {
                // 查询成功，result即为当前所在城市信息
                let a = result.city;
                // let b = a.substr(0, 2);
                // console.log("通过ip获取当前城市：", result);
                let b = a.substr(0, 2);
                localStorage.setItem("cityName", b);
                // this.$router.go(-1);
              }
            });
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
#imgcity {
  width: 6px;
  height: 3px;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  z-index: 3000;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #ededed;
  .left {
    min-width: 15%;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
    span {
      font-size: 13px;
      padding-right: 5px;
    }
    img {
      vertical-align: middle;
    }
  }
  .title {
    text-align: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    font-size: 17px;
  }
  .right {
    width: 15%;
    margin-right: 15px;
    text-align: right;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
