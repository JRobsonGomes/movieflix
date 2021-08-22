import { ReactComponent as StarImage } from 'assets/images/star.svg';
import './styles.scss';

const MovieDetailsComment = () => {

  return (
    <div className="movie-details-comments-container">
      <div className="movie-details-identification">
        <StarImage />
        <h2>Maria Silva</h2>
      </div>
      <div className="movie-details-comments">
        Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
      </div>
    </div>
  )
}

export default MovieDetailsComment;