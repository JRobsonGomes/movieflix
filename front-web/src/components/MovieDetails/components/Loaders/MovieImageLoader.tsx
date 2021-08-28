import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieImageLoader = () => (
  <ContentLoader
    className="movie-details-image"
    speed={1}
    width="100%"
    height={280}
    backgroundColor="#3c3c3c"
    foregroundColor="#6c6c6c"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="280" />
  </ContentLoader>
)

export default MovieImageLoader;