//定义电影列表需要的地址
export const nowPlayingListUri =
  "gateway?cityId=310100&pageSize=10&type=1&k=4592149&pageNum=";
export const comingSoonListUri =
  "gateway?cityId=310100&pageSize=10&type=2&k=5617266&pageNum=";

export const moiveDetailUri = "gateway?k=6330163&filmId=";
//后续有其他地址请求届时再加

export const cinemaListUri = "gateway?cityId=310100&ticketFlag=1&k=3802922";

export const cityListUri = "gateway?k=6743555";

export const loginUrl = "http://127.0.0.1:3000/api/v1/login";

export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info";

export const cinemaDetailUrl = "gateway?k=8801402&cinemaId=";

export const cinemaFilmUrl = "gateway?k=3872506&cinemaId=";
// cinemaId=1000&date=1603382400&&filmId=
export const ticketListUrl = "gateway?k=6645509";