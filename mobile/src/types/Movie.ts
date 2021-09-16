import { ImageSourcePropType } from 'react-native';
import { Review } from './Review';

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUri: ImageSourcePropType;
  synopsis: string;
  genreId: number;
  reviews: Review[];
};
