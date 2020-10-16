<template>
  <div>
    <CinemaTop v-if="is_show"></CinemaTop>
    <CinemaTag v-if="is_show"></CinemaTag>
    <cinemaList class="CinemaList"></cinemaList>
    <footerNav></footerNav>
  </div>
</template>
<script>
import { cinemaListData } from "@/api/api";
import CinemaTop from "@/components/CinemaTop";
import CinemaTag from "@/components/CinemaTag";
import footerNav from "@/components/FooterNav";
import cinemaList from "@/components/CinemaList";
import axios from "axios";
export default {
  data() {
    return {
      cinemas: [],
      is_show: true,
    };
  },

  async mounted() {
    let ret = await cinemaListData();
    this.cinemas = ret.data.data.cinemas;
    // console.log(this.cinemas);
  },
  components: {
    CinemaTop,
    CinemaTag,
    footerNav,
    cinemaList,
  },
};
</script>
<style lang="scss">
.CinemaList {
  margin-top: 90px;
}
</style>
