import React, { useState } from 'react';
import logo from '../../img/logo.png';
import './NavMenu.css';
import { useTranslation } from 'react-i18next';

const NavMenu = (props) => {
  let isAuthenticated = false;

  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage() {
    setLanguage(language == "ru" ? "en" : "ru");
    i18n.changeLanguage(language);
  }

  return (
    <header className="header">

      <nav className="navbar">
        <a className="logo" href="/">
          <img className="logo-img" width="35" height="35" src={logo} />
          <p className="logo-text">
            Langusta
          </p>
        </a>
        <button onClick={() => handleChangeLanguage()}>🌐</button>
        {!isAuthenticated ?
          <ul className="nav-list">
            <li>
              <a className="nav-element" href="/registration">{t("sign-up")}</a>
            </li>
            <li>
              <a className="nav-element" href="/authorization">{t("sign-in")}</a>
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