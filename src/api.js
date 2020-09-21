import axios from "axios";

//axios api 생성
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a6dccd2369a00f11dec430b75421bb4b",
    language: "en-US",
  },
});


//export 할 api 생성

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
