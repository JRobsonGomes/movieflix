import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'components/Login';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from 'utils/auth';
import './styles.scss';

const Home = () => {
  const [isLogged, setIsLogged] = useState<boolean | ''>(false);

  useEffect(() => {
    setIsLogged(isAuthenticated());
  }, [isLogged]);

  if (isLogged) {
    return (
      <Redirect to="/movies" />
    )
  }

  return (
    <div className="home-container">
      <div className="home-content-container">
        <h1 className="text-title">Avalie Filmes</h1>
        <p className="text-subtitle">Diga o que você achou do seu <br /> filme favorito</p>
        <MainImage className="main-image" />
      </div>
      <Login />
    </div>
  )
}

export default Home;