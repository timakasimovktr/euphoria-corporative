import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";

import footerLogo from "../../images/Footer-Logo.png";
import instaIcon from "../../images/Instagram-Icon.svg";
import tgIcon from "../../images/Telegram-Icon.svg";
import fbIcon from "../../images/Facebook-Icon.svg";
import euphoriaLogo from "../../images/Euphoria-Logo.svg";

import "./Footer.scss";

const Footer = () => {

  const scrollTo = () => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = document.getElementById(hash.slice(1));
      if (sectionId) {
        sectionId.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <>
      <footer>
        <div className="footer-wrapper container">
          <div className="footer-row">
            <div className="footer-logo">
              <img src={euphoriaLogo} alt="" />
            </div>

            <div className="footer-links-row" style={{ width: "70%" }}>
              <div className="footer-col">
                <Link to={`${APP_ROUTES.WELCOME}#contactUsSection`} onClick={() => scrollTo()}>
                  <b>Оставить заявку</b>
                </Link>
                <Link to={`${APP_ROUTES.WELCOME}#commentsSection`} onClick={() => scrollTo()}>Отзывы</Link>
              </div>
              <div className="footer-col">
                <Link reloadDocument to={`${APP_ROUTES.CATALOG}`} onClick={() => scrollTo()}>Продукция</Link>
                <Link reloadDocument to={`${APP_ROUTES.CATALOG}`} onClick={() => scrollTo()}>Новинки </Link>
                <Link to={`${APP_ROUTES.WELCOME}#aboutUs`} onClick={() => scrollTo()}>О нас</Link>
              </div>
              <div className="footer-col">
                <Link to={`${APP_ROUTES.WELCOME}#commentsSection`} onClick={() => scrollTo()}>Партнеры</Link>
                <Link to={`${APP_ROUTES.WELCOME}#marketingSection`} onClick={() => scrollTo()}>Клиентам</Link>
                <Link reloadDocument to={`${APP_ROUTES.CONTACTS}`} onClick={() => scrollTo()}>FAQ</Link>
              </div>
              <div className="footer-col">
                <Link reloadDocument to={`${APP_ROUTES.CONTACTS}`} onClick={() => scrollTo()}>Контакты</Link>
                <Link reloadDocument to={`${APP_ROUTES.CONTACTS}`} onClick={() => scrollTo()}>+998 (55) 517-01-12</Link>
                <div className="social_media">
                  <Link to={`${APP_ROUTES.WELCOME}#commentsSection`}>
                    <img src={instaIcon} alt="" />
                  </Link>
                  <Link to={`${APP_ROUTES.WELCOME}#commentsSection`}>
                    <img src={fbIcon} alt="" />
                  </Link>
                  <Link to={`${APP_ROUTES.WELCOME}#commentsSection`}>
                    <img src={tgIcon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="phoenix-prod">
            <div>
              <p>powered by: Phoenix</p>
              <img src={footerLogo} alt="" />
            </div>
            <p>© 2024 - Phoenix</p>
          </div>
        </div>
      </footer>
      <Outlet />
    </>
  );
};

export default Footer;
