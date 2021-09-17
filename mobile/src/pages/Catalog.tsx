import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { colors, theme } from '../styles';
import { MovieCard } from '../components';
import { Movie } from '../types/Movie';
import { getMovies } from '../services';

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  async function fillMovies() {
    setLoading(true);
    const response = await getMovies();
    setMovies(response.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillMovies();
  }, []);

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGray} />
      ) : (
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      )}
    </ScrollView>
  );
};

export default Catalog;
