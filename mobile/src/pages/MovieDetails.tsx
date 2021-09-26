import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { makePrivateRequest } from '../services/requests';
import { colors, text, theme } from '../styles';
import { Movie } from '../@types/Movie';
import { isAllowedByRole } from '../services/auth';
import { MovieCardForm, MovieReview } from '../components';

type ParamList = {
  route: {
    params: { movieId: number };
  };
};

const MovieDetails: React.FC<ParamList> = ({
  route: {
    params: { movieId }
  }
}) => {
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState(false);

  const getMovie = useCallback(() => {
    setIsLoading(true);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(async (response) => {
        setMovie(response.data);
        setRoles(await isAllowedByRole(['ROLE_MEMBER']));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <View style={theme.container}>
      <ScrollView>
        <View style={theme.movieDetailsTopContent}>
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.warning} />
          ) : (
            <Image style={theme.movieDetailsImage} source={{ uri: movie?.imgUri }} />
          )}
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.warning} />
          ) : (
            <View>
              <Text style={text.movieTitle}> {movie?.title} </Text>
              <Text style={text.movieYear}> {movie?.year} </Text>
              <Text style={text.movieSubTitle}> {movie?.subTitle} </Text>
              <View style={theme.sinopseContainer}>
                <Text style={text.movieSinopse}>{movie?.synopsis}</Text>
              </View>
            </View>
          )}
        </View>

        {roles ? (
          <MovieCardForm movieId={movieId} setReloadMovie={getMovie} />
        ) : (
          <View style={theme.alertDanger}>
            <Text style={text.movieSubTitle}>Somente membros podem avaliar</Text>
          </View>
        )}
        {isLoading ? (
          <View style={theme.movieDetailsBottomContent}>
            <ActivityIndicator size="large" color={colors.warning} />
          </View>
        ) : (
          movie?.reviews.length !== 0 && (
            <View style={theme.movieDetailsBottomContent}>
              {movie?.reviews.map((review) => (
                <MovieReview review={review} key={review.id} />
              ))}
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
