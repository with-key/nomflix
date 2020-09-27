import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import ReactPlayer from "react-player";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  padding: 0 100px;
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 48px;
`;

const Title = styled.h3`
  font-size: 100px;
  display: inline-block;
  padding: 20px;
  position: relative;
  z-index: 2;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 48px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 24px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const IMDBBtn = styled.span`
  background-color: #f5c518;
  padding: 5px;
  border-radius: 4px;
  margin-left: 15px;
  /* 과제 : 조건부 CSS */
  display: ${(props) => (props.isImdb ? "inline" : "none")};
  position: relative;
  z-index: 12;
`;

const VideosContainer = styled.div`
  /* border: 1px solid red; */
  margin: 20px;
  z-index: 2;
  position: relative;
`;

const DetailPresenter = ({ result, loading, error, isMovie }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{`${
          result.original_title ? result.original_title : result.original_name
        } | Nomflix`}</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
      />
      <Title>
        {result.original_title ? result.original_title : result.original_name}
      </Title>
      <IMDBBtn isImdb={result.imdb_id ? result.imdb_id : ""}>
        <a target="blank" href={`https://www.imdb.com/title/${result.imdb_id}`}>
          IMDB
        </a>
      </IMDBBtn>
      <VideosContainer>
        <ReactPlayer
          width="100%"
          height="50vh"
          playing
          url={`https://www.youtube.com/watch?v=${result.videos.results.map(
            (v) => v.key
          )}`}
        ></ReactPlayer>
      </VideosContainer>
      <Content>
        {/* <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        /> */}
        <Data>
          {/* 과제 : api에 imdb_id가 있으면 버튼이 활성화 되고, 없으면 안보임  */}

          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
