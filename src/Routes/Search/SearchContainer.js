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

  undateTerm = (event) => {
    const { searchTerm } = this.state;
    const value = event.target.value;
    this.setState({ searchTerm: value });
    console.log(searchTerm);
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    event.preventDefault();
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

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
        undateTerm={this.undateTerm}
      />
    );
  }
}

//handleSubmit : 누군가가 폼에서 text를 입력하고, 엔터를 누르면, handleSubmit이 실행된다.
