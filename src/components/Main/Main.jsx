import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, FreeMode } from "swiper/modules";
import "swiper/css/bundle";

import { APP_ROUTES } from "../../router/Route";
import axios from "axios";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

//images
import complexSupport from "../../images/Complex-Sup-Woman.png";
import marketingLine from "../../images/Marketing-Line.svg";
import marketingLineBG from "../../images/Marketing-Half-line.svg";
import productItem from "../../images/productItem.png";
import productItemAfter from "../../images/productItemAfter.png";
import euphoriaRefferal from "../../images/Euphoria-refferal.png";
import sliderArrow from "../../images/sliderArrow.png";
import quotationMark from "../../images/“.svg";
import commentsRight from "../../images/commentsRight.png";
import commentsLeft from "../../images/commnetsLeft.png";
import person from "../../images/person.png";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";

function Main() {
  const [isLoader, setIsLoader] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);

  useEffect(() => {
    setIsLoader(false);
  }, []);

  return (
    <>
      <Header hiddenLoader={isLoader}></Header>
      <Questions visible={isQuestions} setIsQuestions={setIsQuestions} />
      <main>
        <section className="mainBanner">
          <div className="container">
            <div className="mainBannerHeading">
              <h1>СОЗДАВАЙТЕ СВОЮ ЭЙФОРИЮ С НАМИ КАЖДЫЙ ДЕНЬ.</h1>
              <p>Тут будет текст которй добавится позже</p>
              <div className="mainBannerPartners">
                <Link reloadDocument className="partner"></Link>
                <Link reloadDocument className="partner bigPartner"></Link>
                <Link reloadDocument className="partner"></Link>
              </div>
            </div>
            <div className="mainBannerCards">
              <Swiper
                modules={[Autoplay, EffectCards]}
                loop={true}
                speed={500}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                effect="cards"
                grabCursor={true}
              >
                <SwiperSlide className="slideWrapper">
                  <div className="swiperSlide">
                    <img
                      className="imgBefore"
                      src={productItem}
                      alt={productItem}
                    />
                    <img
                      className="imgAfter"
                      src={productItemAfter}
                      alt={productItemAfter}
                    />
                    <div className="sideTitle">
                      <div className="offer">Скидка 30</div>
                      <div>Anfa Ocu Vital</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slideWrapper">
                  <div className="swiperSlide">
                    <img
                      className="imgBefore"
                      src={productItem}
                      alt={productItem}
                    />
                    <img
                      className="imgAfter"
                      src={productItemAfter}
                      alt={productItemAfter}
                    />
                    <div className="sideTitle">
                      <div className="offer">Скидка 30</div>
                      <div>Anfa Ocu Vital</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="partnersSwiper">
          <div className="container">
            <Swiper
              modules={[Autoplay, Navigation, FreeMode]}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="imgWithTxt" id="aboutUs">
          <div className="imgWithTxtHeading">
            <h2>Комплексная поддержка организма</h2>
            <p>
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Рот, использовало. Рекламных семь маленькая
              он сих агентство своего. Необходимыми диких алфавит встретил
              строчка имеет они запятых дорогу, до то большой, сбить даль, не
              текстами ее взобравшись сих решила наш правилами страна точках
              подзаголовок скатился вопроса. Это послушавшись своих щеке
              пустился предложения они коварный запятых подзаголовок вопроса,
              единственное жизни грустный.
            </p>
            <Link reloadDocument to={APP_ROUTES.CATALOG} className="br10">
              Каталог
            </Link>
          </div>
          <div
            className="imgWithTxtImg"
            style={{ backgroundImage: `url(${complexSupport})` }}
          ></div>
        </section>

        <section className="marketing">
          <div className="marketingHeading">
            <h2>Маркетинговая линейка</h2>
            <p>
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Рот, использовало. Рекламных семь маленькая
              он сих агентство своего. Необходимыми диких алфавит встретил
              строчка имеет они запятых дорогу, до то большой, сбить даль.
            </p>
            <img src={marketingLine} alt={marketingLine} />
            <p>
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Рот, использовало. Рекламных семь маленькая
              он сих агентство своего. Необходимыми диких алфавит встретил
              строчка имеет они запятых дорогу, до то большой, сбить даль.
            </p>
            <Link reloadDocument to={APP_ROUTES.PRODUCTS} className="br10">
              Подробнее
              <img src={sliderArrow} alt={sliderArrow} />
            </Link>
          </div>
          <div className="marketingImg">
            <img src={marketingLineBG} alt={marketingLineBG} />
          </div>
        </section>

        <section className="comments">
          <div className="commentsLeft commentsSlides">
            <div
              className="commentsBgWrapper"
              style={{ backgroundImage: `url(${commentsLeft})` }}
            >
              <div className="commentsSideBgWrapper">
                <div className="commentsSideBgSecondWrapper">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    speed={2000}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={1}
                  >
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="commentsRight commentsSlides">
            <div
              className="commentsBgWrapper"
              style={{ backgroundImage: `url(${commentsRight})` }}
            >
              <div className="commentsSideBgWrapper">
                <div className="commentsSideBgSecondWrapper rightSwiperComments">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    speed={2000}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    spaceBetween={50}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={1}
                  >
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="referral">
          <div className="container">
            <div className="referralTxt">
              <h2>Получите все привелегии Эйфории</h2>
              <h3>
                Реферальная платформа создана для того что бы каждый мог
                зарабатывать на том на чем он будет зарабатывать
              </h3>
              <Link reloadDocument to={APP_ROUTES.REFERRAL} className="br10">
                Подробнее
              </Link>
            </div>
            <div className="referralImg">
              <img src={euphoriaRefferal} alt={euphoriaRefferal} />
            </div>
          </div>
        </section>

        <section className="survey">
          <div className="container">
            <div className="surveyHeading">
              <h2>Текст Слоган</h2>
              <div className="surveyLine"></div>
              <p>
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Все от всех за буквенных грустный свой
                сбить пор снова рекламных.
              </p>
            </div>
            <div className="surveyCards">
              <div>
                <div className="cardItem yellowCard">
                  Как часто вы измеряете артериальное давление?
                </div>
                <div className="cardItem yellowCard">
                  Какие факторы, на ваш взгляд, влияют на ваше кровяное
                  давление?
                </div>
              </div>
              <div>
                <div className="cardItem">
                  Принимаете ли вы лекарства для контроля артериального
                  давления?
                </div>
                <div className="cardItem">
                  Курите ли вы или употребляете алкоголь?
                </div>
              </div>
            </div>
            <Link onClick={() => setIsQuestions(true)} className="br10">
              Пройти опрос
            </Link>
          </div>
        </section>

        <section className="contactUs">
          <div className="container">
            <div className="contactUsTxt">
              <h2>Далеко-далеко за словесными горами.</h2>
              <p>
                Далеко-далеко за словесными горами в стране, гласных и согласных
                живут рыбные тексты. Свой вершину своих буквоград не, живет
                запятых, вдали страну агентство текста подзаголовок предложения
                ручеек о.
              </p>
            </div>
            <div className="contactUsForm">
              <h2>Свяжитесь с нами</h2>
              <form action="POST">
                <input type="text" name="name" placeholder="Имя" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона (+998)"
                  pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  required
                  maxLength={13}
                />
                <button type="submit">Оставить заявку</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <Outlet />
    </>
  );
}

export default Main;
