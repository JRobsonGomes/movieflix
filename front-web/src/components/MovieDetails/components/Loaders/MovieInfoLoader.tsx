import React from 'react';
import ContentLoader from 'react-content-loader';

const MovieInfoLoader = () => (
  <ContentLoader
    className="movie-details-top-right"
    speed={1}
    width="100%"
    height={400}
    backgroundColor="#3c3c3c"
    foregroundColor="#6c6c6c"
  >
    <rect x="0" y="0" rx="2" ry="2" width="350" height="30" />
    <rect x="0" y="40" rx="2" ry="2" width="100" height="24" />
    <rect x="0" y="74" rx="2" ry="2" width="300" height="20" />
    <rect x="0" y="104" rx="2" ry="2" width="100%" height="300" />
  </ContentLoader>
)

export default MovieInfoLoader;