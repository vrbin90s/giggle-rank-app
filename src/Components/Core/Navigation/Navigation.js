import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import './Navigation.scss';

const Navigation = () => {

  const [navShow, setNavShow] = useState(false);

  const handleNavToggleClick = (e) => {
    setNavShow(!navShow); // Toggle navShow state
    e.stopPropagation();
  };

  const handleLinkClick = () => {
    setNavShow(false); // Hide the navigation menu
  };

  return(
    <header className="header">
        <div className="header__top">
          <Container>
            <NavLink className="header__logo--link" to="/" onClick={handleLinkClick}>
              <h1 className="header__logo">Giggle Rank</h1>
            </NavLink>
          </Container>
        </div>
        
        <div className="header__bottom">
          <Container>
            <nav className="nav">
              <ul className={`nav__menu ${navShow ? 'nav__show' : ''}`}>
                <li className="nav__menu--item"><NavLink className="nav__menu--link" to="/movies" onClick={handleLinkClick}>Movies</NavLink></li>
                <li className="nav__menu--item"><NavLink className="nav__menu--link" to="/reviews" onClick={handleLinkClick}>Reviews</NavLink></li>
                <li className="nav__menu--item"><NavLink className="nav__menu--link" to="/critics" onClick={handleLinkClick}>Our Critics</NavLink></li>
                <li className="nav__menu--item"><NavLink className="nav__menu--link" to="/comments" onClick={handleLinkClick}>Comments</NavLink></li>
              </ul>
            </nav>
            <button 
              className={`nav__toggle ${navShow ? 'nav__toggle--close' : ''}`} 
              aria-controls="nav__menu" 
              onClick={handleNavToggleClick}
            >
              <span className="lines"></span>
            </button>
          </Container>
        </div>
    </header>
  )
}

export default Navigation;
