import MovieImage from '../../assets/images/movie-image.png'
import MovieDetailsComment from './components/MovieDetailsComment';
import './styles.scss';

const MovieDetails = () => {

  return (

    <div className="movie-details-container">
      <div className="movie-details-content-container">
        <div className="card-base movie-details-top-content">
          <img className="movie-details-image" src={MovieImage} alt="MovieImage" />
          <div className="movie-details-top-right">
            <h1> MovieDetails </h1>
            <h2> 2020 </h2>
            <p>O olho do inimigo está se movendo.</p>
            <div className="sinopse-container">
              O confronto final entre as forças do bem e do mal
              que lutam pelo controle do futuro da Terra Média se aproxima.
              Sauron planeja um grande ataque a Minas Tirith, capital de Gondor,
              o que faz com que Gandalf e Pippin partam para o local na
              intenção de ajudar a resistência. Um exército é reunido por
              Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron.
              Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha
              da Perdição para destruir o anel.
            </div>
          </div>
        </div>
        <div className="card-base movie-details-center-content">
          <input className="form-control" type="text" placeholder="Deixe sua avaliação aqui" />
          <button className="btn btn-warning" type="submit">Salvar Avaliação</button>
        </div>
        <div className="card-base movie-details-bottom-content">
          <MovieDetailsComment />
          <MovieDetailsComment />
          <MovieDetailsComment />
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;