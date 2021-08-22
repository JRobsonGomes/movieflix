import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/Movie';
import { makePrivateRequest } from 'utils/request';
import MovieReview from './components/MovieReview';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data));
  }, [movieId]);

  return (

    <div className="movie-details-container">
      <div className="movie-details-content-container">
        <div className="card-base movie-details-top-content">
          <img className="movie-details-image" src={movie?.imgUri} alt="MovieImage" />
          <div className="movie-details-top-right">
            <h1> {movie?.title} </h1>
            <h2> {movie?.year} </h2>
            <p> {movie?.subTitle} </p>
            <div className="sinopse-container">
              {movie?.synopsis}
            </div>
          </div>
        </div>
        <div className="card-base movie-details-center-content">
          <input className="form-control" type="text" placeholder="Deixe sua avaliação aqui" />
          <button className="btn btn-warning" type="submit">Salvar Avaliação</button>
        </div>
        {
          movie?.reviews.length !== 0 &&
          <div className="card-base movie-details-bottom-content">
            {movie?.reviews.map(review => (
              <MovieReview review={review} key={review.id} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default MovieDetails;