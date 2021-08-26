import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/Movie';
import { isAllowedByRole } from 'utils/auth';
import { makePrivateRequest } from 'utils/request';
import MovieCardForm from './components/MovieCardForm';
import MovieReview from './components/MovieReview';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const [reloadMovie, setReloadMovie] = useState(false);

  useEffect(() => {
    makePrivateRequest({ url: `/movies/${movieId}` })
    .then(response => setMovie(response.data));
    setReloadMovie(false)
  }, [movieId, reloadMovie]);

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
        {isAllowedByRole(['ROLE_MEMBER']) ?
          < MovieCardForm
            movieId={movieId}
            setReloadMovie={() => setReloadMovie(!reloadMovie)}
          /> :
          (
            <div className="alert alert-danger mt-4 text-center" role="alert">
              <h4>Somente membros podem avaliar</h4>
            </div>
          )}
        {movie?.reviews.length !== 0 &&
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