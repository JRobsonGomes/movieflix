import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-mb bg-warning main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h2>MovieFlix</h2>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;