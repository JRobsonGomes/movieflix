import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { text, theme } from '../styles';
import { Movie } from '../types/Movie';

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <TouchableOpacity style={theme.movieCardContainer}>
      <Image style={theme.movieCardImage} source={movie.imgUri} />
      <View style={theme.movieCardContent}>
        <Text style={text.movieTitle}> {movie.title} </Text>
        <Text style={text.movieYear}> {movie.year} </Text>
        <Text style={text.movieSubTitle}> {movie.subTitle} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
