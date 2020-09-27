import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Conatainer = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }

    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  display: block;
`;

const Poster = ({ imageUrl, title, id, rating, year, isMovie }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Conatainer>
      <ImageContainer>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          <span> {rating}/10</span>
        </Rating>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : require("../assets/noPosterSmall.png") // require 의 용도?
          }
        ></Image>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Conatainer>
  </Link>
);

export default Poster;
