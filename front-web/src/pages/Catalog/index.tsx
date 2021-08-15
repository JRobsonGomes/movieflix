import MovieCard from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesResponse } from 'types/MoviesResponse';
import { makePrivateRequest } from 'utils/request';
import './styles.scss';

const Catalog = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();

  useEffect(() => {
    const params = {
      page: 0,
      size: 8
    }

    makePrivateRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data));
  }, []);

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
          {moviesResponse?.content.map(movie => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.title}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog;