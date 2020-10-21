//发送具体的请求

//导入需要使用模块

import http from "@/api/http";
import {
  nowPlayingListUri,
  comingSoonListUri,
  moiveDetailUri,
  cinemaListUri,
  cityListUri,
  loginUrl,
  centerUrl,
  cinemaDetailUrl,
  cinemaFilmUrl,
  ticketListUrl,
} from "@/config/url";

//请求正在热映列表数据
export const nowPlayingListData = (pageNum) => {
  http.defaults.headers.info = "";
  return http.get(nowPlayingListUri + pageNum);
};
//请求即将上映列表数据
export const comingSoonListData = (pageNum) => {
  http.defaults.headers.info = "";
  return http.get(comingSoonListUri + pageNum);
};

//请求电影详情数据

export const moiveDetailData = (filmId) => {
  //给axios设置请求头
  http.defaults.headers.authorization = "";
  http.defaults.headers.info = "info";
  return http.get(moiveDetailUri + filmId);
};

//请求电影院数据
export const cinemaListData = () => {
  http.defaults.headers.authorization = "";
  http.defaults.headers.info = "cinema";
  return http.get(cinemaListUri);
};
//请求电影院详情
export const cinemaDetailData = (cinemaId) => {
  http.defaults.headers.authorization = "";
  http.defaults.headers.info = "detail";
  return http.get(cinemaDetailUrl + cinemaId);
};
//请求电影院----电影详情
export const cinemaFilmData = (cinemaId) => {
  http.defaults.headers.authorization = "";
  http.defaults.headers.info = "cinemaFilm";
  return http.get(cinemaFilmUrl + cinemaId);
};
//请求电影院----电影票数据
export const filmTicketData = (filmIdTicket, cinemaId, filmId) => {
  http.defaults.headers.authorization = "";
  http.defaults.headers.info = "FilmTicket";
  let filmIdTicketRe = '&' + 'date' + '=' + filmIdTicket
  let cinemaIdRe = '&' + 'cinemaId' + '=' + cinemaId
  let filmIdRe = '&' + 'filmId' + '=' + filmId
  return http.get(ticketListUrl + filmIdTicketRe + cinemaIdRe + filmIdRe);
};
//请求城市数据
export const cityListData = async () => {
  http.defaults.headers.authorization = "";
  http.defaults.headers.info = "city";
  let ret = await http.get(cityListUri);
  let cities = ret.data.data.cities;
  let codeList = []; //'A','B'.'C'...(完整26个)
  let dataList = []; //城市信息
  let indexList = []; //'A','B'.'C'...(经过筛选的字母)
  for (let i = 65; i <= 90; i++) {
    codeList.push(String.fromCharCode(i));
  }
  codeList.forEach((element) => {
    //与城市信息的拼音字段首字母进行对比,如果符合则留下大字母
    let tempArr = cities.filter(
      (item) => element.toLowerCase() == item.pinyin.substr(0, 1)
    );
    if (tempArr.length > 0) {
      indexList.push(element);
      dataList.push({
        index: element,
        data: tempArr,
      });
    }
  });
  return Promise.resolve([dataList, indexList]);
};

//登录

export const userLogin = (data) => {
  http.defaults.headers.authorization = "";
  return http.post(loginUrl, data);
};

//获取用户个人信息
export const userInfo = (_token) => {

  http.defaults.headers.authorization = _token;
  http.interceptors.response.use(function (response) {
    // response.data.user_info.gender = response.data.user_info.gender ? '女' : '男';
    // console.log(response)
    return response
  }, function (error) {
    //错误处理
  })
  return http.get(centerUrl);
};