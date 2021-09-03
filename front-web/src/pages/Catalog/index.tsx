import MovieCard from 'components/MovieCard';
import Pagination from 'components/Paigination';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Genre } from 'types/Genre';
import { MoviesResponse } from 'types/MoviesResponse';
import { makePrivateRequest } from 'utils/request';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import MovieFilter from './components/MovieFilter';
import './styles.scss';

const Catalog = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genre, setGenre] = useState<Genre>();

  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      size: 8,
      genreId: genre?.id
    }

    setIsLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage, genre]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleChangeGenre = (genre?: Genre) => {
    setActivePage(0);
    setGenre(genre);
  }

  return (
    <div className="container">
      <MovieFilter handleChangeGenre={handleChangeGenre} />
      <div className="catalog-content">
        <div className="row">
          {isLoading ? <MovieCardLoader /> : (
            moviesResponse?.content.map(movie => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.title}>
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              </div>
            ))
          )}
        </div>
        {moviesResponse && (
          <Pagination
            totalPages={moviesResponse.totalPages}
            activePage={activePage}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div >
  )
}

export default Catalog;