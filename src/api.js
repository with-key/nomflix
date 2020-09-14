import axios from "axios";

// create a new instance of axios with a custom config
// instance란, 방금 생성된 객체? 라고 해야하나.....

// 1단계 : api설정을 위한 axios instance를 생성한다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/", // get할 정보의 공통적인 정보는 baseURL로 설정
  params: {
    // 변경되는 정보는 params로 넣어서 설정
    api_key: "a6dccd2369a00f11dec430b75421bb4b",
    language: "en-US",
  },
});

// /로 시작하는 것은 절대경로, 절대경로로 설정하면 baseURL을 덮어쓰게된다. 반드시 / 없이 작성
// 설정한  api 네트워크 잘 들어오는지 확인
// api.get("tv/popular");
// export default api;

// 2단계 : 각 페이지별 api정보를 get을 이용하여 가져온다 (url 작성 유의)
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movie: (id) =>
    api.get(`movie/${id}`, {
      append: {
        appeend_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term), //term값을 인코더 처리 해주는 함수 삽입
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      append: {
        appeend_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term), //term값을 인코더 처리 해주는 함수 삽입
      },
    }),
};
