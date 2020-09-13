import React from "react";
import TVPresenter from "./TVPresenter.js";

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
      <TVPresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
