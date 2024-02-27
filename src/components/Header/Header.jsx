// Header.jsx
import React, { useState } from "react";
import euphoriaLogo from "../../images/Euphoria-Logo.svg";
import globalIcon from "../../images/Global-Icon.svg";
import { APP_ROUTES } from "../../router/Route";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import rusFlag from "../../images/Rus-Flag.svg";
import uzbFlag from "../../images/Uzb-Flag.svg";

const Header = () => {
  const navigation = useNavigate();
  const [changeLanguage, setChangeLanguage] = useState(false);

  return (
    <header>
      <div className="header-wrapper container ">
        <div className="header-logo">
          <img src={euphoriaLogo} alt="" />
        </div>
        <div className="header-menu">
          <nav>
            <div className="navbar-container">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>
              <ul className="menu__box">
                <li>
                  <a onClick={() => navigation(APP_ROUTES.PRODUCTS)}>
                    Продукция
                  </a>
                </li>
                <li>
                  <a onClick={() => navigation(APP_ROUTES.FILIAL)}>Филиалы</a>
                </li>
                <li>
                  <a href="">Партнеры</a>
                </li>
                <li>
                  <a href="">Контакты</a>
                </li>
                <li>
                  <a href="">О нас</a>
                </li>
                {/* <li className="change-language-mobile">
                  <b>Поменять язык</b>
                </li> */}
              </ul>
            </div>
          </nav>
          <div className="change-language">
            {changeLanguage ? (
              <img
                onClick={() => setChangeLanguage(false)}
                src={globalIcon}
                alt=""
              />
            ) : (
              <img
                onClick={() => setChangeLanguage(true)}
                src={globalIcon}
                alt=""
              />
            )}

            {changeLanguage && (
              <>
                <div className="change-language-block">
                  <div>
                    <p>Русский</p>
                    <img src={rusFlag} alt="rus" />
                  </div>
                  <div>
                    <p>Узбекский</p>
                    <img src={uzbFlag} alt="uzb" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
