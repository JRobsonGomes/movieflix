import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'components/Login';
import './styles.scss';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-content-container">
        <h1 className="text-title">Avalie Filmes</h1>
        <p className="text-subtitle">Diga o que você achou do seu <br /> filme favorito</p>
        <MainImage className="main-image" />
      </div>
      <Login/>
    </div>
  )
}

export default Home;