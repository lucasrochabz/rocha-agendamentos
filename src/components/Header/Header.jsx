import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header-bg">
        <div className="header">
          <h2>Logo</h2>
          <nav>
            <ul className="navegacao">
              <Link to="/cliente">Cliente</Link>
              <Link to="/horarios">Horarios</Link>
              <Link to="/admin">Admin</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
