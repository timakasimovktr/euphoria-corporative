import React, { useEffect, useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import globalIcon from "../../images/Global-Icon.svg";
import euphoriaLogo from "../../images/Euphoria-Logo.svg";
function Main() {
  return (
    <>
      <header>
        <div className="header-wrapper container ">
          <div className="header-logo">
            <img src={euphoriaLogo} alt="" />
          </div>
          <div className="header-menu">
            <nav>
              <ul>
                <li>Продукция</li>
                <li>Партнеры</li>
                <li>Контакты</li>
                <li>О нас</li>
              </ul>
            </nav>
            <div className="change-language">
              <img src={globalIcon} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-wrapper container">
          <div style={{ width: "55%" }} className="first-main-wrapper">
            <div>
              <h1>СОЗДАВАЙТЕ СВОЮ ЭЙФОРИЮ С НАМИ КАЖДЫЙ ДЕНЬ.</h1>
              <p>Тут будет текст, который добавится позже</p>
            </div>
            <div className="card-wrapper">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <div></div>
            partner-program  
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default Main;
