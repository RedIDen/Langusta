import React from 'react';
import logo from '../../img/logo.png';
import './NavMenu.css';

const NavMenu = (props) => {
  let isAuthenticated = false;

  return (
    <header className="header">

      <nav className="navbar">
        <a className="logo" href="/">
          <img className="logo-img" width="35" height="35" src={logo} />
          <p className="logo-text">
            Langusta
          </p>
        </a>
        {!isAuthenticated ?
          <ul className="nav-list">
            <li>
              <a className="nav-element" href="/registration">Зарегистрироваться</a>
            </li>
            <li>
              <a className="nav-element" href="/authentication">Войти</a>
            </li>
          </ul> :
          <ul>

          </ul>
        }
      </nav>
    </header>
  );
}

export default NavMenu;