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
import Modal from "../Modal/Modal";
function Main() {
  const [modal, setModal] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);
  const slides = [
    {
      name: "Complex Support",
      img: complexSupport,
      description: "Lorem Ipsum",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "ddd Support",
      img: complexSupport,
      description: "Lorem Ipsum",
      quote:
        "Lorem ipsu veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <>
      <Header></Header>
      <Modal visible={modal} setVisible={setModal}>
        {currentForm == 1 && (
          <>
            <div className="modal-content-wrapper">
              <h2>Пройдите опрос</h2>
              <form action="">
                <div className="inputs-wrapper">
                  <input type="text" placeholder="Возраст" name="age" id="" />
                  <div className="radio-btn-wrapper">
                    <label>Пол</label>
                    <div>
                      <div className="radio-btn">
                        <input type="radio" name="sex" value="woman" id="" />
                        <label htmlFor="woman">Жен</label>
                      </div>
                      <div className="radio-btn">
                        <input type="radio" name="sex" value="man" id="" />
                        <label htmlFor="man">Муж</label>
                      </div>
                    </div>
                  </div>

                  <select name="illness-category" id="">
                    <option disabled value="">
                      Категория болезни
                    </option>
                    <option value="Tashkent">Ташкент</option>
                    <option value="Tashkent">Самарканд</option>
                    <option value="Tashkent">Карши</option>
                  </select>
                </div>
                <button onClick={() => setCurrentForm(2)}>Дальше </button>
              </form>
            </div>
          </>
        )}
        {currentForm == 2 && (
          <>
            <div className="modal-content-wrapper">
              <h2>Пройдите опрос</h2>
              <form action="">
                <div className="inputs-wrapper">
                  <h2>
                    Гипертония <span>1/10</span>
                  </h2>

                  <select name="illness-category" id="">
                    <option disabled value="">
                      Как часто вы измеряете артериальное давление?
                    </option>
                    <option value="Tashkent">1 раз в день</option>
                    <option value="Tashkent">2 раза в день</option>
                    <option value="Tashkent">Больше</option>
                  </select>
                </div>
                <button onClick={() => setCurrentForm(2)}>Дальше </button>
              </form>
            </div>
          </>
        )}
      </Modal>
      <main>
        <div className="main-wrapper container">
          <div className="first-main-wrapper">
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
          <div className="second-main-wrapper">
            <img src={mainBanner} alt="" />
          </div>
        </div>
      </main>
      <div className="complex-support">
        <div className="complex-support-wrapper">
          <div className="complex-info container-complex">
            <div>
              <h1>Комплексная поддержка организма</h1>
              <p>Не знаете, с чего начать? </p>
              <p>
                Пройдите онлайн-опрос, что бы выбрать подхлдящй набор продуктов
              </p>
              <button>Каталог</button>
            </div>
          </div>
          <div className="complex-image">
            <img src={complexSupport} alt="" />
          </div>
        </div>
      </div>
      <div className="marketing">
        <div className="marketing-wrapper">
          <div className="marketing-info container-complex">
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
      </div>
      {/* slider triangles */}
      <div className="euphoria-partnership">
        <div className="euphoria-partnership-wrapper container">
          <h2>Получите все привелегии Эйфории</h2>
          <div className="partnership-info">
            <div>
              <h3>Реферральная система</h3>
              <p>
                Реферальная платформа создана для того что бы каждый мог
                зарабатывать на том на чем он будет зарабатывать
              </p>
              <button>Стать Партнером</button>
            </div>
            <img src={euphoriaRefferal} alt="" />
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
            <button
              onClick={() => {
                setModal(true);
                setCurrentForm(1);
              }}
            >
              Пройти опрос
            </button>
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
            <form action="">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Номер телефона" />
              <button>Оставить заявку</button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Main;
