<template>
  <ul class="cinema-list-top">
    <li class="cinema-banner-item">
      <div class="name">
        <span class="title">【上海】SFC上影影城电影兑换券</span>
        <span class="icon">影院券</span>
      </div>
      <div class="type">【上海】SFC上影影城电影兑换券</div>
    </li>
  </ul>
</template>

<style lang="scss">
.cinema-list-top {
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #ededed;
  .cinema-banner-item {
    padding: 15px;
    position: relative;
    background-color: #fff;
    .name {
      font-size: 15px;
      color: #18191a;
      position: relative;
      font-size: 15px;
      color: #18191a;
      .icon {
        color: #ffb245;
        margin-left: 7px;
        font-size: 10px;
        padding: 0 6px;
        text-align: center;
        position: absolute;
        top: 50%;
        border: 1px solid #ffb245;
        transform: translateY(-50%);
      }
    }
    .type {
      margin-top: 5px;
      font-size: 13px;
      color: #797d82;
    }
  }
}
</style>
