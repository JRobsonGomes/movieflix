import MovieCard from 'components/MovieCard';
import './styles.scss';

const Catalog = () => {

    return (
        <div className="container">
            <nav className="card-base catalog-navbar">
                <select className="catalog-nav-select">
                    <option selected>Selecione uma categoria</option>
                    <option value="1">Aventura</option>
                    <option value="2">Ação</option>
                    <option value="3">Drama</option>
                </select>
            </nav>
            <div className="catalog-content">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;