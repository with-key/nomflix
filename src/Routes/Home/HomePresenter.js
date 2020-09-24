import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

//삼항연산자로 api 로딩 후에 component가 보여지도록 설정함
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now playing">
          {nowPlaying.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular movie">
          {popular.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="upcoming movie">
          {upcoming.map((movie) => (
            <Poster />
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
