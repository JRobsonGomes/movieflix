import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { colors, theme } from '../styles';
import { MovieCard } from '../components';
import { makePrivateRequest } from '../services/requests';
import { MoviesResponse } from '../@types/MoviesResponse';
import { useAuth } from '../contexts/AuthContext';

const Catalog: React.FC = () => {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const { signOut } = useAuth();

  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      size: 8
      // genreId: genre?.id
    };

    setLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then((response) => setMoviesResponse(response.data))
      .catch(() => {
        Alert.alert('Erro ao listar filmes?', 'Tente novamente mais tarde!', [
          {
            text: 'Voltar',
            onPress: () => signOut(),
            style: 'cancel'
          }
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activePage, signOut]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (loading) {
    return (
      <View style={theme.loadContainer}>
        <ActivityIndicator size="large" color={colors.warning} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {moviesResponse?.content.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default Catalog;
