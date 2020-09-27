import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet"; 

const Container = styled.div`
  padding: 20px;
`;

//삼항연산자로 api 로딩 후에 component가 보여지도록 설정함
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Movie | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title> Movie | Nomflix</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now playing">
          {nowPlaying.map((movie) => (
            <Poster
              isMovie={true}
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular movie">
          {popular.map((movie) => (
            <Poster
              isMovie={true}
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="upcoming movie">
          {upcoming.map((movie) => (
            <Poster
              isMovie={true}
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error}></Message>}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
