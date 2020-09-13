import React from "react";
import DetailPresenter from "./DetailPresenter.js";

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
      <DetailPresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
