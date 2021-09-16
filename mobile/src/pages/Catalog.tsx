import React from 'react';
import { ScrollView } from 'react-native';
import movieImg from '../assets/movie-image.png';
import { Review } from '../types/Review';
import { theme } from '../styles';
import { MovieCard } from '../components';

const reviews: Review[] = [];

const movies = [
  {
    id: 1,
    title: 'O Retorno do Rei',
    subTitle: 'O olho do inimigo está se movendo.',
    year: 2020,
    imgUri: movieImg,
    synopsis:
      'O confronto final entre as forças do ' +
      'bem e do mal que lutam pelo controle do futuro ' +
      'da Terra Média se aproxima. Sauron planeja ' +
      'um grande ataque a Minas Tirith, capital' +
      'de Gondor, o que faz com que Gandalf e ' +
      'Pippin partam para o local na intenção' +
      'de ajudar a resistência. Um exército é ' +
      'reunido por Theoden em Rohan, em mais ' +
      'uma tentativa de deter as forças de Sauron.' +
      'Enquanto isso, Frodo, Sam e Gollum seguem sua' +
      'viagem rumo à Montanha da Perdição para destruir o anel.',
    genreId: 1,
    reviews: reviews
  },
  {
    id: 2,
    title: 'O Retorno do Rei',
    subTitle: 'O olho do inimigo está se movendo.',
    year: 2020,
    imgUri: movieImg,
    synopsis:
      'O confronto final entre as forças do ' +
      'bem e do mal que lutam pelo controle do futuro ' +
      'da Terra Média se aproxima. Sauron planeja ' +
      'um grande ataque a Minas Tirith, capital' +
      'de Gondor, o que faz com que Gandalf e ' +
      'Pippin partam para o local na intenção' +
      'de ajudar a resistência. Um exército é ' +
      'reunido por Theoden em Rohan, em mais ' +
      'uma tentativa de deter as forças de Sauron.' +
      'Enquanto isso, Frodo, Sam e Gollum seguem sua' +
      'viagem rumo à Montanha da Perdição para destruir o anel.',
    genreId: 1,
    reviews: reviews
  }
];

const Catalog: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default Catalog;
