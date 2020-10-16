<template>
  <div class="cinema-list-tag">
    <div class="cinema-tag-name">
      <label for="">
        全城
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
          style="display: none;"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
        />
      </label>
      <label for="">
        APP订票
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
          style="display: none;"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
        />
      </label>
      <label for="">
        最近去过
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
          style="display: none;"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          width="6px"
          height="3px"
        />
      </label>
    </div>
    <div class="fiter-box">
      <ul class="district-list" v-for="(item, index) in cinemas" :key="index">
        <li>
          <div>{{ item.districtName }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.cinema-list-tag {
  position: fixed;
  top: 44px;
  right: 0;
  height: 50px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  z-index: 2000;
  border-bottom: 1px solid #ededed;
  .fiter-box {
    display: none;
    background-color: firebrick;
    margin-top: 50px;
    width: 100vw;
    .district-list {
      list-style: none;
      padding: 10px 0 0;
      margin: 0 0 0 10px;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      li {
        font-size: 12px;
        display: inline-block;
        width: calc((100vw - 50px) / 4);
        padding-bottom: 15px;
        padding-right: 10px;
        height: 30px;
        flex-shrink: 1;
        div {
          position: relative;
          color: #797d82;
          border-radius: 3px;
          text-align: center;
          height: 30px;
          line-height: 27px;
          border: 1px solid rgba(210, 214, 220, 0.5);
        }
      }
    }
  }
  .cinema-tag-name {
    label {
      float: left;
      width: 33.3%;
      line-height: 49px;
      font-size: 14px;
      color: #191a1b;
      letter-spacing: -0.2px;
      img {
        vertical-align: middle;
      }
    }
  }
}
</style>

<script>
import { cinemaListData } from "@/api/api";
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
  },
};
</script>
