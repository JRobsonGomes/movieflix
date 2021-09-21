import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { colors, theme } from '../styles';
import { MovieCard } from '../components';
import { makePrivateRequest } from '../services/requests';
import { MoviesResponse } from '../@types/MoviesResponse';

const Catalog: React.FC = () => {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      size: 8
      // genreId: genre?.id
    };

    setLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then((response) => setMoviesResponse(response.data))
      .finally(() => {
        setLoading(false);
      });
  }, [activePage]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGray} />
      ) : (
        moviesResponse?.content.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      )}
    </ScrollView>
  );
};

export default Catalog;
