import React, { useEffect, useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
//images
import mainBanner from "../../images/Main-Section-Banner.svg";
import complexSupport from "../../images/Complex-Sup-Woman.png";
import marketingLine from "../../images/Marketing-Line.svg";
import marketingLineBG from "../../images/Marketing-Half-line.svg";
import euphoriaRefferal from "../../images/Euphoria-refferal.png";
import quotationMark from "../../images/“.svg";
//components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
function Main() {
  const [showArrow, setShowArrow] = useState(false);
  const slides = [
    {
      name: "Complex Support",
      img: complexSupport,
      description: "Lorem Ipsum",
    },
    {
      name: "ddd Support",
      img: complexSupport,
      description: "Lorem Ipsum",
    },
  ];

  return (
    <>
      <Header></Header>
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
          <div style={{ width: "40%", display: "flex" }}>
            <img src={mainBanner} alt="" />
          </div>
        </div>
      </main>
      <div className="complex-support">
        <div className="complex-support-wrapper container">
          <div className="complex-info">
            <div>
              <h1>Комплексная поддержка организма</h1>
              <p>Не знаете, с чего начать? </p>
              <p>
                Пройдите онлайн-опрос, что бы выбрать подхлдящй набор продуктов
              </p>
            </div>

            <button>Каталог</button>
          </div>
          <div>
            <img src={complexSupport} alt="" />
          </div>
        </div>
      </div>
      <div className="marketing">
        <div className="marketing-wrapper container">
          <div className="marketing-info">
            <h2>Маркетинг</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <img src={marketingLine} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button>
              Подробнее
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4108 2.01911L1.86938 25.5605M25.4108 2.01911L11.3471 1.71338M25.4108 2.01911L25.7165 14.8599"
                  stroke="white"
                  stroke-width="2.44586"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="marketing-image">
            <img src={marketingLineBG} alt="" />
          </div>
        </div>
        {/* <div className="quote-block">
            <h3>Heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div> */}
      </div>
      {/* slider triangles */}
      <div className="euphoria-partnership">
        <div className="euphoria-partnership-wrapper container">
          <h2>Получите все привелегии Эйфории</h2>
          <div className="partnership-info">
            <img src={euphoriaRefferal} alt="" />
            <div>
              <p>
                Реферальная платформа создана для того что бы каждый мог
                зарабатывать на том на чем он будет зарабатывать
              </p>
              <button>Стать Партнером</button>
            </div>
          </div>
        </div>
      </div>
      {/* Haircare Products */}
      <div className="survey-block">
        <div className="survey-block-wrapper container">
          <div className="survey-info">
            <h2>Текст Слоган</h2>
            <hr />
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore Ut Ut enim
            </p>
            <button>Пройти опрос</button>
          </div>
          <div className="survey-cards">
            <div className="survey-card">
              <img src="" alt="" />
            </div>
            <div className="survey-card">
              <img src="" alt="" />
            </div>
            <div className="survey-card">
              <img src="" alt="" />
            </div>
            <div className="survey-card">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* в quote section не получилось добавить бекгруанд с фигурками и стеклянный фон поставился странно */}
      <div className="quote-section">
        <div className="quote-wrapper container">
          <div className="dark-quote">
            <div className="dark-quote-wrapper">
              <img src={quotationMark} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Slider slides={slides} dark={false}></Slider>
            </div>
          </div>
          <div className="light-quote">
            <div className="light-quote-wrapper">
              <img src={quotationMark} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              {/* <div className="quote-slider">
                <div className="left-arrow">
                  <img src="" alt="" />
                </div>
                <div className="quote-person">
                  <img src="" alt="" />
                  <h5>Доктор jivan lika</h5>
                  <h6>Кандидат наук в отрасли бадов</h6>
                </div>
                <div className="right-arrow">
                  <img src="" alt="" />
                </div>
              </div> */}

              <Slider slides={slides} dark={true}></Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="application-form">
        <div className="application-form-wrapper container">
          <div className="application-form-info">
            <h3>Текст текст</h3>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt{" "}
            </p>
          </div>
          <div className="application-form-send">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Номер телефона" />
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Main;
