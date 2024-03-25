import React from "react";
import footerLogo from "../../images/Footer-Logo.png";
import instaIcon from "../../images/Instagram-Icon.svg";
import tgIcon from "../../images/Telegram-Icon.svg";
import fbIcon from "../../images/Facebook-Icon.svg";
import euphoriaLogo from "../../images/Euphoria-Logo.svg";
import './Footer.scss';
const Footer = () => {
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
                <a href="">
                  <b>Оставить заявку</b>
                </a>
                <a href="">Отзывы</a>
              </div>
              <div className="footer-col">
                <a href="">Продукция</a>
                <a href="">Новинки </a>
                <a href="">О нас</a>
              </div>
              <div className="footer-col">
                <a href="">Партнеры</a>
                <a href="">Клиентам</a>
                <a href="">FAQ</a>
              </div>
              <div className="footer-col">
                <a href="">Контакты</a>
                <a href="">+998 (55) 517-01-12</a>
                <div className="social_media">
                  <a href="">
                    <img src={instaIcon} alt="" />
                  </a>
                  <a href="">
                    <img src={fbIcon} alt="" />
                  </a>
                  <a href="">
                    <img src={tgIcon} alt="" />
                  </a>
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
    </>
  );
};

export default Footer;
