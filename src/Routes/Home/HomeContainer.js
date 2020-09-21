import React from "react";
import { moviesApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };
  //async await 을 쓰는 이유 : await을 쓰지 않으면 try에서 api data를 가져올 때, 차마 api가 다 불러오기전에 다음 코드가 실행된다. 이에따라 동기적 처리를 하기 위해 await을 사용한다

  //componentDidMount 하면서 state가 변경되고,
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      //catch : 작동하지 않으면, catch가 다른 처리를 해줄 것이고 (보통 error)
      this.setState({
        error: "Can't find movies informations",
      });
    } finally {
      //뭐가 발생하던 finally 는 반드시 실행됨
      // componentDidMount가 끝나고, state가 또 변경되고
      this.setState({
        loading: false,
      });
    }
  }

  //render가 실행되고 componentDidMount가 실행
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    //HomePresenter에 props를 설정하고, props를 받아 실행된다.
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
