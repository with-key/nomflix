import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  //input value를 searchTerm 으로 변환하는 함수
  //자식 컴포넌트로 보내서 input value의 변화를 감지한게 한다
  updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ searchTerm: value });
  };

  //form에서 onSubmit 되면 실행할 이벤트핸들러
  //updateTerm에서 변환된 searchTerm을 가져와 공백이 아니면 searchByTerm을 실행한다
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    console.log("searchTerm :>> ", searchTerm);
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  //searchTerm을 가져와서 url을 만들고 get한다
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({ error: "cant find results" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        undateTerm={this.updateTerm}
      />
    );
  }
}
