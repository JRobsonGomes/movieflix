import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { colors, theme } from '../styles';
import { MovieCard } from '../components';
import { makePrivateRequest } from '../services/requests';
import { useAuth } from '../contexts/AuthContext';
import { Movie } from '../@types/Movie';

type Props = {
  load: boolean;
};

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { signOut } = useAuth();

  const getMovies = useCallback(async () => {
    const params = {
      page: activePage,
      size: 4
      // genreId: genre?.id
    };

    await makePrivateRequest({ url: '/movies', params })
      .then((response) => {
        setMovies([...movies, ...response.data.content]);
        setTotalPages(response.data.totalPages);
        setActivePage(activePage + 1);
      })
      .catch(() => {
        Alert.alert('Erro ao listar filmes!', 'Tente novamente mais tarde!', [
          {
            text: 'Voltar',
            onPress: () => signOut(),
            style: 'cancel'
          }
        ]);
      });
  }, [activePage, movies, signOut]);

  const handleActivePage = () => {
    if (totalPages > activePage) {
      getMovies();
    }
  };

  useEffect(() => {
    setLoading(true);
    getMovies();

    return () => setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    handleActivePage();

    return () => setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (movies.length == 0) {
    return <FooterList load={loading} />;
  }

  return (
    <FlatList
      contentContainerStyle={theme.scrollContainer}
      data={movies}
      keyExtractor={(movie) => String(movie.id)}
      renderItem={({ item }) => <MovieCard movie={item} key={item.id} />}
      onEndReached={handleActivePage}
      onEndReachedThreshold={0.1}
      ListFooterComponent={totalPages > activePage ? <FooterList load={loading} /> : null}
    />
  );
};

const FooterList: React.FC<Props> = ({ load }) => {
  if (!load) return null;

  return (
    <View style={theme.loadContainer}>
      <ActivityIndicator size="large" color={colors.warning} />
    </View>
  );
};

export default Catalog;
