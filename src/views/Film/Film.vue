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
      city1: "",
    };
  },

  mounted() {
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
  methods: {},
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
