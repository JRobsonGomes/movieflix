import MovieImage from 'assets/images/movie-image.png';
import './styles.scss';

const MovieCard = () => {

  return (
    <div className="card-base movie-card-container">
      <img className="movie-card-image" src={MovieImage} alt="MovieImage" />
      <div className="movie-card-content">
        <h1>O Retorno do Rei</h1>
        <h2>2013</h2>
        <p>O olho do inimigo está se movendo.</p>
      </div>
    </div>
  )
}

export default MovieCard;