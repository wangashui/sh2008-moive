import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//引入路由模块化文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import cityRouter from "./routes/city"
import vueRouter from "./routes/vuex"
import loginRouter from "./routes/login"
import setRouter from "./routes/set"
import cinemaDetailRouter from "./routes/cinemadetail"
const routes = [{
    path: '/',
    //访问根路由跳转到电影页面
    redirect: '/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vueRouter,
  loginRouter,
  setRouter,
  cinemaDetailRouter,
]

const router = new VueRouter({
  mode: 'history',
  //前缀
  //base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let arr = [
    //存需要登录的页面地址
    "/cinema"
  ]
  // console.log(to.path);
  if (arr.includes(to.path)) {
    //返回真 在(需要登录判断)
    if (localStorage.getItem("_token")) {
      next()
    } else {
      // console.log('你没登录')
      next({
        path: "/login",
        query: {
          refer: to.fullPath
        }
      })
    }
  } else {
    //不在(不需要登录判断)
    next()
  }
})


export default router