<template>
  <div>
    <div class="cinema-schedule">
      <div class="header-left" @click="returnS">
        <img
         
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg=="
          width="11px"
          height="18px"
          style=""
        />
        <img
         
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAQlBMVEVHcEwZGxsfHx8ZGhsZHh4ZGhsZHx////8aGhsZGhsbGxsaGhwcHBwYGRoZGhwaGhsaGh0aGh4bGxsZGhwZGhwZGhuZ90I0AAAAFXRSTlMAnRDlO/MoAZznQYY1+qvEVjpx0NGKQfLiAAAA8klEQVRIx+3WSQ6DMAwFUIbSUKAMbXP/q5apAoMdf0di1ywtniwF+0OS/M/F55XXDnpweHcZKeTelwi9Fd73pFJ7iE7wQXu6EqEzvB+KCGUhQgWoUxFqNADDNAhDVIEyVaFEAchTCHIUhGcKwyM1QEpNcE+NcKNm+KMRcKXPCLjSGDheztjRty4CFlNPLBHPs9pG0OVWsURkt8NMt/dopPsBMFE6OQZ6HDmYnmcVpNyQQ5TfDoBKa6VSeR8VGlrkmaYu4muVuFSkWnSIVM8cgSJhxdIBSrmF0toHC6uZVqTUgSk30YZUsj4Dl7dq/n/Jl58vF/caAGebDs0AAAAASUVORK5CYII="
          width="19px"
          height="19px"
          style="display: none"
        />
      </div>
      <div :style="{ height: height + 'px' }" class="scroll">
        <div>
      <div class="header-title" :class="headfixed ? 'fix-header-title' : '' ">{{ cinema.name }}</div>
      <div class="cinema-wrap">
        <div class="cinema-info" style="">
          <div class="tags">
            <div class="tag" v-for="(tag,sub) in cinema.services" :key = sub>{{tag.name}}</div>
            <i
             
              class="tag-more iconfont icon-quanju_liebiaojiantou"
              style="font-size: 10px"
            >
              <img
               
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg=="
                width="4px"
                height="8px"
                alt=""
                class="film-more"
            /></i>
          </div>
          <div class="address">
            <img
             
              src="data:image/png;base64,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"
              width="14px"
              height="21px"
              alt=""
            />
            <div
             
              class="address-des"
              data-enter-time="1603157888"
              data-click-fun="track_f_289305"
            >
              {{ cinema.address }}
            </div>
            <a
             
              href="tel:021-63594933"
              class="tel-icon"
              data-enter-time="1603157888"
              data-click-fun="track_f_748605"
              ><img
               
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC"
                width="17px"
                height="18px"
                alt=""
            /></a>
          </div>
        </div>

        <div class="schedule-wrap">
          <div class="film-bg">
           <div data-v-0134b84b="" ref="mybox" class="img" style="background-image: url(&quot;https://pic.maizuo.com/usr/movie/fad9f1e9a5c38f3883d7f9b5e561e5fe.jpg&quot;);"></div>
         </div> 
            </div>
          
        <div class="film-list">
          <div class="swiper-container">
            <div class="swiper-wrapper" style="transition-duration: 0ms">
              <div
                class="swiper-slide swiper-slide-active"
                style="width: 81.75px; margin-right: 16px"
                v-for="(item,index) in film"
                :key="index"
                @click="getId(item.filmId,index)"
              >
                <div class="film-item">
                  <div class="img-wrap">
                    <img :src="item.poster" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
          </div>
          <div class="triangle"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUAgMAAACCKJcoAAAACVBMVEVHcEz////////mcEUwAAAAAnRSTlMAgJsrThgAAABLSURBVAgdBcEBDQAACAMg/GYDAxnB/mkEUAuBPgjMQOAagtpaBM0hGAbB0Qi11BIajjAwhIMmaqFWNHBigBEHtNQCtWmAywBMDqAfx4oGipkmrUEAAAAASUVORK5CYII=" width="20px" height="10px" alt=""></div>
          </div>
          <div class="film-info" :class="namefixed ? 'film-infogb' : ''" v-for="(filmN,num) in film" :key="num" v-if="filmN.filmId == filmsId">
          <div class="film-head">
            <span class="film-name">{{filmN.name}}</span> 
            <span class="film-score">{{filmN.grade}}</span> 
            <span class="film-score-unit">分</span></div>
             <div class="film-desc">{{filmN.category+'|'+filmN.runtime+'分钟'+'|'+filmN.director}}</div> 
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg==" width="4px" height="8px" alt="" class="film-more">
          </div>
          <div :class="Timefix ? 'timefixed':''">
          <van-tabs animated  @click="click">
            <van-tab v-for="(time,timein) in Time" :title="time|Chdate" :key="timein" v-model="active" :name="time" >
          <div>
            <div data-v-0134b84b="" class="schedule-item" v-for="(tickL,subr) in filmList" :key="subr">
              <div data-v-0134b84b="" class="left">
                <div data-v-0134b84b="" class="start-at">
                {{tickL.showAt|getStartTime}}
              </div> 
              <div data-v-0134b84b="" class="end-at">
                {{tickL.endAt |getStartTime}}散场
              </div>
              </div> 
              <div data-v-0134b84b="" class="middle">
                <div data-v-0134b84b="" class="language">{{tickL.filmLanguage}}{{tickL.imagery}}</div>
                 <div data-v-0134b84b="" class="hall">{{tickL.hallName}}</div>
                 </div>
                  <div data-v-0134b84b="" class="right">
                   <div data-v-0134b84b="" class="buy-ticket">购票</div>
                    <div data-v-0134b84b="" class="lowest-price">
                      <span data-v-0134b84b="" class="price-icon">￥</span>{{tickL.salePrice|Cprice}}
              </div>
              </div>
              </div>
                  </div>
            </van-tab>
          </van-tabs>
          </div>
        </div>      
      </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cinemaDetailData, cinemaFilmData, filmTicketData } from "@/api/api";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";
import moment from "moment";
import "moment/locale/zh-cn";
import Vue from "vue";
import { Tab, Tabs } from "vant";
import "vant/lib/index.css";  
import BScroll from "better-scroll";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      cinema: {},
      film: [],
      filmsId: "",
      Time: [],
      filmTicketId: "",
      active: 2,
      filmIndex: "",
      filmList:[],
      height:0,
      bs:null,
      headfixed:false,
      namefixed:false,
      Timefix:false,
    };
  },
  async mounted() {
    let ret = await cinemaDetailData(this.$route.params.cinemaId);
    let res = await cinemaFilmData(this.$route.params.cinemaId);

    this.film = res.data.data.films;
      if(this.film.length==0){
      alert("该影院已关闭")
      this.$router.go(-1);
      return
    }
    this.filmTicketId = this.film[0].filmId;
    this.cinema = ret.data.data.cinema;
    this.filmsId = this.film[0].filmId;
    this.Time = this.film[0].showDate;
    // console.log(this.Time)
    let tick = await filmTicketData(this.Time[0],this.$route.params.cinemaId,this.filmTicketId);
    this.filmList = tick.data.data.schedules
    console.log(this.filmList)
    let _this = this;
    this.height = document.documentElement.clientHeight - 100;
    // console.log(this.height);

    window.addEventListener(
      "scroll",
      (e) => {
        let top = document.documentElement.scrollTop;
        if (top > 44) {
          this.headfixed = true;
        } else{
          this.headfixed = fasle;
        }
        if(top > 319){
          this.namefixed=true;
        }else{
          this.namefixed=false;
        }
        if(top > 409){
          this.Timefix=true;
        }else{
          this.Timefix=false;
        }
      },
      true
    );


    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        slidesPerView: 3.8,
        spaceBetween: 10,
        centeredSlides: true,
        slideToClickedSlide: true,
        active:0,
        swipeable:true,
        on: {
          slideChange: async function () {
            _this.filmsId = _this.film[this.activeIndex].filmId;
            _this.Time = _this.film[this.activeIndex].showDate;
                let tick = await filmTicketData(_this.Time[0],_this.$route.params.cinemaId,_this.filmsId);
                _this.filmList = tick.data.data.schedules
          },
        },
      });
    });
},
  updated() {

    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
    });
  },
  created() {
    //发起通知,通知app.vue组件移除底  部菜单
    this.eventBus.$emit("footernav", false);
  },
  beforeDestroy() {
    //发起通知,通知app.vue组件恢复底部菜单
    this.eventBus.$emit("footernav", true);
  },
  filters: {
    Chdate: function (value) {
      //时间戳的单位是秒,需要乘以1000转化为毫秒进行处理
      return moment(value * 1000).format("dddMM月DD日");
    },
    Cprice:function(price){
      return price/100
    },
    getStartTime:function(time){
    return moment(time * 1000).format("hh:mm");
    }
  },
  methods: {
    getId: function (id, index) {
      this.filmsId = id;
      this.filmIndex = index;
    },  
     async click(time){
       let tick = await filmTicketData(time,this.$route.params.cinemaId,this.filmsId);
      this.filmList = tick.data.data.schedules
      // console.log(this.filmList);
      // console.log(time)
      console.log(this.filmList[0].showAt);
      },
      returnS:function(){
        this.$router.go(-1);
      },
  },
};
</script>
<style lang="scss">
.cinema-schedule .fix-header-title{
  position: fixed;
}
.cinema-wrap .film-infogb{
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 1000;
}
.cinema-wrap .timefixed{
  position: fixed;
}
.schedule-item {
    height: 44px;
    padding: 15px;
    position: relative;
    background: #fff;
    .left{
      float: left;
    width: 100px;
      .start-at{  
        font-size: 15px;
        color: #191a1b; 
      }
      .end-at {
      font-size: 13px;
      color: #797d82;
      margin-top: 2px;
      }
  }
  .middle {
    float: left;
    width: calc(100% - 240px);
      .language {
    font-size: 15px;
    color: #191a1b;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  .hall {
    font-size: 13px;
    color: #797d82;
    margin-top: 2px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  }

  .right {
    float: right;
    padding: 10px 0;
    line-height: 25px;
    color: #ff5f16;
    .buy-ticket {
    float: right;
    height: 25px;
    width: 50px;
    border-radius: 2px;
    position: relative;
    text-align: center;
    }
    .buy-ticket::after {
    content: " ";
    -webkit-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
    .lowest-price{
      float: right;
        padding-right: 20px;
        font-size: 15px;
    }
    .price-icon{
      font-size: 10px;
    }
  }
}
.van-tab--active {
  color: #ff5f16;
}
.van-tabs__line {
  width: 89px;
  height: 1px;
}
.van-tab {
  color: #191a1b;
}
.film-more {
  position: absolute;
  right: 15px;
  top: 0;
  margin-top: 36px;
}
.film-desc {
  text-align: center;
  height: 18px;
  color: #797d82;
  font-size: 13px;
  padding: 0 12%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.film-head {
  margin-bottom: 10px;
  text-align: center;
  line-height: 18px;
}
.film-info {
  width: 100%;
  background: #fff;
  height: 50px;
  padding: 15px 0;
  position: relative;
}
.triangle {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  top: 5px;
  img {
    width: 20px;
    height: 10px;
  }
}
.film-list {
  height: 130px;
  padding: 15px 0;
  position: relative;
}
.schedule-wrap {
  position: relative;
}
.film-bg {
  position: absolute;
  top: 0;
  height: 130px;
  width: 100%;
  padding: 15px 0;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    -webkit-filter: blur(30px);
  }
}
.img-wrap {
  height: 130px !important;
  width: 90px !important;
  img {
    width: 100% !important;
    height: 100% !important;
  }
}
.tel-icon {
  height: 18px;
  padding: 0 25px;
}
.address-des {
  font-size: 14px;
  height: 20px;
  padding: 0 12px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid #ededed;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
.address {
  height: 50px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 17px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.tags {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 15px;
  color: #ffb232;
  overflow: hidden;
  position: relative;
  padding: 5px 0 15px;
  border-bottom: 1px solid #ededed;
  .tag {
    position: relative;
    padding: 0 6px;
    margin: 0 2.5px;
    font-size: 10px;
  }
  .tag::after {
    content: " ";
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #ffb232;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
    border-radius: 1px;
  }
  i {
    margin-left: 5px;
  }
}
.cinema-schedule {
  // overflow: hidden;
  padding-top: 44px;
  background: #fff;
  min-height: 100vh;
}
.header-left {
  position: fixed;
  top: 0;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  z-index: 303;
  img {
    vertical-align: middle;
  }
}
.header-title {
  position: relative;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 30px);
  padding: 0 15px;
  background: #fff;
  top: 0;
  height: 44px;
  line-height: 44px;
  z-index: 302;
}
</style>