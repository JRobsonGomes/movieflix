import { Movie } from 'types/Movie';
import './styles.scss';

type Props = {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {

  return (

    <div className="card-base movie-card-container">
      <img className="movie-card-image" src={movie.imgUri} alt="MovieImage" />
      <div className="movie-card-content">
        <h1> {movie.title} </h1>
        <h2> {movie.year} </h2>
        <p> {movie.subTitle} </p>
      </div>
    </div>
  )
}

export default MovieCard;