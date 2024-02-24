import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Marketing.scss'
import MarketingPhoto from "../../images/Marketing-Photo.png";
const Marketing = () => {
  return (
    <>
      <Header />
      <div className="marketing-main">
        <div className="marketing-wrapper container">
          <h1>Маркентинг</h1>
          <div className="marketing-info">
            <p>
              Добро пожаловать в мир компании "Euphoria group"! Мы -
              совокупность трех динамичных компаний, объединенных одной общей
              миссией: помогать людям вести здоровый образ жизни. Собравшиеся
              под одним брендом коллективы колл-центров, маркетинговых и
              логистических специалистов работают совместно уже более восьми
              лет, чтобы обеспечить вас высококачественными продуктами и
              услугами, способствующими вашему благополучию.
            </p>
            <img src={MarketingPhoto} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Marketing;
