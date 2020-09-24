import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Card = ({ movie }) => {

  const [isHover, setIsHover] = useState(false)
  const handleOnHover = () => (setIsHover(true))
  const handleOffHover = () => (setIsHover(false))

  return (
    <Container onMouseEnter={handleOnHover} onMouseLeave={handleOffHover} path={movie.poster_path} isHover={isHover}>
      {isHover || <Label>{movie.title}</Label>}
      {isHover && (<Span>
        <Font size='large'>{movie.title}</Font>
        <Font size='small'>{movie.overview}</Font>
      </Span>)}
    </Container>
  )
}

const Font = styled.label`
 font-size: ${({ size }) => size === 'large' && css`22px`};
 font-size: ${({ size }) => size === 'medium' && css`18px`};
 font-size: ${({ size }) => size === 'small' && css`14px`};
`;

const Span = styled.div`
background-color: black;
width: 100%;
height: 100%;
position: absolute;
right: -100%;

display: flex;
flex-direction: column;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const Container = styled.span`
background-image: ${({ path }) => path && `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2/${path}")`};
background-size: cover;
/* ${({ isHover }) => !isHover ? css`
`: css`
`
  }; */
width: 120px;
height: 180px;
position: relative;
transition: ease 0.6s;
  :hover {
  transform: scale(1.6);
  cursor: pointer;
  z-index: 2;
}
`;
const Label = styled.label`
position: absolute;
transform: translateX(-50%);
transform: translateY(-50%);
left: 50%;
top: 50%;
`;

export default Card