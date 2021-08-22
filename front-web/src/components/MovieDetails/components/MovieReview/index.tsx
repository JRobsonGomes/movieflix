import { ReactComponent as StarImage } from 'assets/images/star.svg';
import { Review } from 'types/Review';
import './styles.scss';

type Props = {
  review: Review;
}

const MovieReview = ({ review }: Props) => {

  return (
    <div className="movie-details-comments-container">
      <div className="movie-details-identification">
        <StarImage />
        <h2> {review.user.name} </h2>
      </div>
      <div className="movie-details-comments">
        {review.text}
      </div>
    </div>
  )
}

export default MovieReview;