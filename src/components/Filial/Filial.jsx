import React from "react";
import "./Filial.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
//images
import filialMap from "../../images/filial-Map.png";
import instaIcon from "../../images/Instagram-Icon-Filled.svg";
import locIcon from "../../images/Location-Icon.svg";
import mailIcon from "../../images/Mail-Icon.svg";
import facebookIcon from "../../images/Facebook-Icon.svg";
import phoneIcon from "../../images/Phone-Icon.svg";
import circles from "../../images/Filial-Contact-Rounds.svg";
const Filial = () => {
  return (
    <>
      <Header />
      <div className="filial-main">
        <div className="filial-main-wrapper container">
          <div className="filial-row">
            <div className="filial-info">
              <h1>EUPHORIA</h1>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Ut Ut enim Ut enim ad minima veniam, quis
                nostrum exercitationem ullam
              </p>
            </div>
            <div className="filial-map">
              <img src={filialMap} alt="Filial Map" />
            </div>
          </div>
          <div className="filial-form-section">
            <div className="filial-form-wrapper">
              <div className="filial-form-contacts">
                <div className="filial-form-contacts-wrapper">
                  <div>
                    <h3>Форма обратной связи</h3>
                    <p>
                      Если у вас есть какие то вопросы или предложения по
                      сотрудничеству,заполните форму
                    </p>
                  </div>
                  <div className="filial-contacts">
                    <div className="phone-num">
                      <img src={phoneIcon} alt="Phone Icon" />
                      <p>+99899 345 69 89</p>
                    </div>
                    <div className="mail-adress">
                      <img src={mailIcon} alt="Mail Icon" />
                      <p>dkkggglllllll@gmail.com</p>
                    </div>
                    <div className="location">
                      <img src={locIcon} alt="Mail Icon" />
                      <p>
                        132 Dartmouth Street Boston, Massachusetts 02156 United
                        States
                      </p>
                    </div>
                  </div>
                  <div className="filial-form-socialmedia">
                    <a href="">
                      <img src={facebookIcon} alt="" />
                    </a>
                    <a href="">
                      <img src={instaIcon} alt="" />
                    </a>
                  </div>
                </div>
                {/* <div>
                <img src={circles} alt="" />
              </div> */}
              </div>
              <div className="filial-form-block">
                <div className="filial-form-inputs-row">
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Фамилия" />
                </div>
                <div className="filial-form-inputs-row">
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Телефон" />
                </div>
                <textarea placeholder="Описание (обязательно)" name="" id="" cols="30" rows="5"></textarea>
                <button>Отправить</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Filial;
