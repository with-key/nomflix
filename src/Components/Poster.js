import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageContainer = styled.div``;
const Conatainer = styled.div``;
const Image = styled.div``;
const Rating = styled.span``;
const Title = styled.span``;
const Year = styled.span``;

const Poster = ({ imageUrl, title, rating, year, id, isMovie }) => (
  <Link to={isMovie ? `/moive/${id}` : `/show${id}`}>
    <Conatainer>
      <ImageContainer>
        <Image bgUrl={imageUrl}></Image>
        <Rating>
          {rating}
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </ImageContainer>
    </Conatainer>
  </Link>
);

export default Poster;
