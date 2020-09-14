import React from "react";
import TVPresenter from "./TVPresenter.js";

export default class extends React.Component {
  steate = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  redner() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
