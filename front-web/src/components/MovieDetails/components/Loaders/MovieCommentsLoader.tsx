import ContentLoader from 'react-content-loader';
import { generateList } from 'utils/list';

const MovieCommentsLoader = () => {
  const loaderItems = generateList(4);

  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          className="movie-details-comments-container"
          key={item}
          speed={1}
          width="100%"
          height={78}
          backgroundColor="#3c3c3c"
          foregroundColor="#6c6c6c"
        >
          <circle cx="10" cy="11" r="10" />
          <rect x="30" y="0" rx="0" ry="0" width="100" height="22" />
          <rect x="0" y="32" rx="4" ry="4" width="100%" height="46" />
        </ContentLoader>
      ))}
    </>
  )
}

export default MovieCommentsLoader;