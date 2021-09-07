import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from 'utils/auth';
import './styles.scss';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location]);

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    logout();
  }

  return (
    <nav className="navbar navbar-expand-mb bg-warning main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo-text">
          <h2>MovieFlix</h2>
        </Link>
        {currentUser &&
          <a
            href="#logout"
            className="btn btn-outline-dark nav-btn-logout"
            onClick={handleLogout}>
            Sair
          </a>
        }
      </div>
    </nav>
  )
}

export default Navbar;