import React from 'react';
import starImage from '../assets/star.png';
import { View, Text, Image } from 'react-native';
import { Review } from '../@types/Review';
import { text, theme } from '../styles';

type Props = {
  review?: Review;
};

const MovieReview: React.FC<Props> = ({ review }) => {
  return (
    <View style={theme.movieDetailsCommentsContainer}>
      <View style={theme.movieDetailsIdentification}>
        <Image source={starImage} style={{ width: 15, height: 15 }} />
        <Text style={text.userName}> {review?.user.name} </Text>
      </View>
      <View style={theme.movieDetailsComments}>
        <Text style={text.movieSinopse}>{review?.text}</Text>
      </View>
    </View>
  );
};

export default MovieReview;
