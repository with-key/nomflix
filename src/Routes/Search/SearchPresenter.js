import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  error,
  searchTerm,
  handleSubmit,
  undateTerm,
}) => (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={undateTerm}
        ></Input>
      </Form>
      {
        loading ? (
          <Loader />
        ) : (
            <>
              {movieResults && movieResults.length > 0 && (
                <Section title="Movie Results">
                  {movieResults.map((movie, id) => (
                    <Card key={id} path={movie.poster_path}></Card>
                  ))}
                </Section>
              )}
              {tvResults && tvResults.length > 0 && (
                <Section title="TV Show Results">
                  {tvResults.map((show) => (
                    <span key={show.id}>{show.name}</span>
                  ))}
                </Section>
              )}
            </>
          )
      }
    </Container >
  );

const Card = styled.img`
  background-image: ${({ path }) => path && `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2/${path}")`};
  width: 120px;
  height: auto;
`;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  undateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
