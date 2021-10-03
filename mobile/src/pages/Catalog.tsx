import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { colors, theme } from '../styles';
import { MovieCard } from '../components';
import { makePrivateRequest } from '../services/requests';
import { useAuth } from '../contexts/AuthContext';
import { Movie } from '../@types/Movie';
import { Genre } from '../@types/Genre';
import MovieFilter from '../components/MovieFilter';

type Props = {
  load: boolean;
};

const Catalog: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [genre, setGenre] = useState<Genre | null>(null);
  const { signOut } = useAuth();
  const SIZE = 4;

  const getMovies = useCallback(async () => {
    const params = {
      page: 0,
      size: SIZE
    };

    await makePrivateRequest({ url: '/movies', params })
      .then((response) => {
        setMovies(response.data.content);
        setTotalPages(response.data.totalPages);
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
  }, [signOut]);

  const handleActivePage = () => {
    totalPages > activePage && setActivePage((prevState) => prevState + 1);
  };

  const handleChangeGenre = useCallback((g: Genre) => {
    setActivePage(0);
    setMovies([]);
    setGenre(g);

    console.log(g);
  }, []);

  //Executa no inicio do carregamento sem dependencias
  useEffect(() => {
    setLoading(true);
    getMovies();

    return () => setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Executa quando mudar activePage - Scroll infinito
  useEffect(() => {
    setLoading(true);
    console.log(`TotalPage: ${totalPages}`);
    console.log(`ActivePage: ${activePage}`);

    const fetchScrollData = async () => {
      const params = {
        page: activePage,
        size: SIZE
      };

      await makePrivateRequest({ url: '/movies', params }).then((response) => {
        setMovies([...movies, ...response.data.content]);
      });
    };

    if (totalPages > activePage) {
      fetchScrollData();
    }

    return () => setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  //Executa quando a função handleChangeGenre mudar
  useEffect(() => {
    setLoading(true);
    handleChangeGenre;

    const fetchData = async () => {
      const params = {
        page: 0,
        size: SIZE,
        genreId: genre?.id
      };

      await makePrivateRequest({ url: '/movies', params }).then((response) => {
        setMovies(response.data.content);
        console.log(`params ${params.genreId}`);
        console.log(`genre ${genre}`);
      });
    };

    fetchData();

    return () => setLoading(false);
  }, [genre, handleChangeGenre]);

  if (movies.length == 0 && genre == null) {
    return <FooterList load={loading} />;
  }

  return (
    <View style={{ height: '100%', backgroundColor: colors.primary }}>
      <FlatList
        ListHeaderComponent={<MovieFilter handleChangeGenre={handleChangeGenre} />}
        contentContainerStyle={theme.scrollContainer}
        data={movies}
        keyExtractor={(movie) => String(movie.id)}
        renderItem={({ item }) => <MovieCard movie={item} key={item.id} />}
        onEndReached={genre == null && movies.length > 2 ? handleActivePage : null}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          totalPages > activePage && genre == null ? <FooterList load={loading} /> : null
        }
      />
    </View>
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
