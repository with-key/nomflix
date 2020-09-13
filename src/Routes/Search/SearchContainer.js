import React from "react";
import SearchPresenter from "./SearchPresenter.js";

export default class extends React.Component {
  steate = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  redner() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <SearchPresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
