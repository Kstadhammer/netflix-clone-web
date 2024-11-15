import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Movie {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
}

interface RowProps {
  title: string;
  fetchUrl: () => Promise<any>;
  isLargeRow?: boolean;
}

const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
`;

const Title = styled.h2`
  margin-left: 20px;
`;

const PostersContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.img<{ isLargeRow?: boolean }>`
  object-fit: contain;
  width: ${({ isLargeRow }) => (isLargeRow ? "400px" : "230px")};
  max-height: ${({ isLargeRow }) => (isLargeRow ? "320px" : "150px")};
  margin-right: 10px;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
`;

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const baseImageUrl = process.env.REACT_APP_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUrl();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching row data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <Title>{title}</Title>
      <PostersContainer>
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            src={`${baseImageUrl}/w500${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title || movie.name}
            isLargeRow={isLargeRow}
          />
        ))}
      </PostersContainer>
    </RowContainer>
  );
};

export default Row;
