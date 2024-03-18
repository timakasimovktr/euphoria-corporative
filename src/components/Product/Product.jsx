import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import axios from "axios";

import "./Product.scss";
import { Outlet, Link } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import productItem from "../../images/productItem.png";
import productItemAfter from "../../images/productItemAfter.png";
import successOrder from "../../images/successOrder.svg";
import complexSupport from "../../images/Complex-Sup-Woman.png";
//images
import rightArrow from "../../images/sliderArrow.png";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Product() {
  const [qty, setQty] = useState(0);
  const [orederStep1, setOrderStep1] = useState(true);
  const [orederStep2, setOrderStep2] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [productObj, setProductObj] = useState({});
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    window.onload = () => {
      if (productObj) {
        setIsLoader(false);
      }
    };
  });

  const closePopup = () => {
    const orderWrapper = document.querySelector(".orderWrapper");
    orderWrapper.style.animation = "riseDown 0.5s ease-in-out 1";

    setTimeout(() => {
      setIsOpenOrder(false);
      setOrderStep1(true);
      setOrderStep2(false);
      orderWrapper.style.animation = "";
    }, 500);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const apiUrl = `${APP_ROUTES.URL}/products/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setProductObj(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (productObj) {
      setIsLoader(false);
    }
  });

  return (
    <>
      <Header hiddenLoader={isLoader}></Header>
      <main>
        <div
          className={`orderPopup ${isOpenOrder ? "" : "hidden"}`}
          onClick={() => closePopup()}
        >
          <div className="orderWrapper" onClick={(e) => e.stopPropagation()}>
            <div className="closePopup" onClick={() => closePopup()}></div>
            <div className={`orderStep1 ${orederStep1 ? "" : "hidden"}`}>
              <h3>Оформить заказ</h3>
              <input type="text" placeholder="Имя" maxLength="30" />
              <input type="text" placeholder="Фамилия" maxLength="30" />
              <input type="tel" placeholder="Номер телефона" maxLength="13" />
              <select name="" id="">
                <option value="" disabled hidden>
                  Город
                </option>
                <option value="">Ташкент</option>
                <option value="">Самарканд</option>
                <option value="">Карши</option>
                <option value="">Бухара</option>
                <option value="">Джизах</option>
              </select>
              <button
                className="sendOrder"
                onClick={() => [setOrderStep2(true), setOrderStep1(false)]}
              >
                Заказать
              </button>
            </div>
            <div className={`orderStep2 ${orederStep2 ? "" : "hidden"}`}>
              <img src={successOrder} alt={successOrder} />
              <h3>Заявка принята</h3>
              <p>
                Наш сотрудник свяжется с вами <br /> в ближайшее время!
              </p>
            </div>
          </div>
        </div>
        <section className="shopTextWrapper">
          <div className="container">
            <h3>SHOP</h3>
            <div className="shopline"></div>
            <p>Find the perfect plant for your space</p>
          </div>
        </section>
        <section className="productWrapper">
          <div className="productImages">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              speed={500}
              navigation={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              grabCursor={true}
              slidesPerView={1}
              className="productSwiper"
            >
              <SwiperSlide className="slideWrapper">
                <img src={productObj.image} alt={productObj.image} />
              </SwiperSlide>
              <SwiperSlide className="slideWrapper">
                <img src={productObj.image} alt={productObj.image} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="productDescription">
            <h1>{productObj.title}</h1>
            <p>{productObj.description}</p>
            <h3>{productObj.price?.toLocaleString()} сум</h3>
            <div className="orderWrapper">
              <button onClick={() => setIsOpenOrder(true)}>Заказать</button>
              <div className="qtyInput">
                <p>Количество:</p>
                <div className="minus" onClick={() => setQty(qty && qty - 1)}>
                  -
                </div>
                <div className="number">{qty}</div>
                <div className="plus" onClick={() => setQty(qty + 1)}>
                  +
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="productRules">
          <div className="container">
            <div className="productRulesWrapper">
              <div className="rule">
                <h3>Состав:</h3>
                <p>
                  Изготавливаются в форме органоспецифических протеолипосом
                  путем купажирования различных растений.
                </p>
              </div>
              <div className="rule">
                <h3>Действие препарата: </h3>
                <p>
                  Предотвращает развитие простаты. Уменьшает воспаление
                  простаты. Улучшение мочеиспускание.
                </p>
              </div>
            </div>
            <div className="productRulesWrapper">
              <div className="rule">
                <h3>Показания:</h3>
                <p>
                  Андросома применяется для повышения уровня тестостерона у
                  мужчин, для лечения эректильной дисфункции.
                </p>
              </div>
              <div className="rule">
                <h3>Противопоказания: </h3>
                <p>
                  Повышенная чувствительность к одному или нескольким
                  компонентам препарата.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="imgWithTxt rightTxt">
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
            {/* <Link to={APP_ROUTES.CATALOG} className="br10">
              Каталог
            </Link> */}
          </div>
          <div
            className="imgWithTxtImg"
            style={{ backgroundImage: `url(${complexSupport})` }}
          ></div>
        </section>
        <section className="imgWithTxt leftTxt">
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
          </div>
          <div
            className="imgWithTxtImg"
            style={{ backgroundImage: `url(${complexSupport})` }}
          ></div>
        </section>
        <section className="imgWithTxt rightTxt">
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
          </div>
          <div
            className="imgWithTxtImg"
            style={{ backgroundImage: `url(${complexSupport})` }}
          ></div>
        </section>
      </main>
      <Footer />
      <Outlet />
    </>
  );
}

export default Product;
