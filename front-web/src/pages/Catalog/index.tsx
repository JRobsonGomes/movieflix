import MovieCard from 'components/MovieCard';
import Pagination from 'components/Paigination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesResponse } from 'types/MoviesResponse';
import { makePrivateRequest } from 'utils/request';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import './styles.scss';

const Catalog = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage,
      size: 8
    }

    setIsLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  return (
    <div className="container">
      <nav className="card-base catalog-navbar">
        <select defaultValue="" className="catalog-nav-select">
          <option value="">Selecione uma categoria</option>
          <option value="1">Aventura</option>
          <option value="2">Ação</option>
          <option value="3">Drama</option>
        </select>
      </nav>
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