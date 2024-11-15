import React from 'react';
import styled from 'styled-components';
import Row from '../components/Row/Row';
import {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from '../services/tmdb';

const HomeContainer = styled.div`
  padding-top: 70px; // Account for fixed navbar
`;

const Home = () => {
  return (
    <HomeContainer>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
    </HomeContainer>
  );
};

export default Home;
