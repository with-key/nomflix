import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  // 기본적인 클래스형 컴포넌트 만드는 구조
  // constructor -> super -> this.state -> 내가 만들고싶은 state추가
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    //props의 디폴트 state
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      //route 컴포넌트에서 각 페이지의 정보를 props로 제공함
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.props;
    const parseId = parseInt(id); // id가 number가 아니면, 홈으로 푸시함
    if (isNaN(parseId)) {
      return push("/"); //return 의 목적은 함수를 종료시키는데 있다
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
      console.log(result);
    } catch {
      this.setState({ error: "cant find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
