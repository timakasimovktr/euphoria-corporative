import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Product.scss";
import { Outlet, Link } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import successOrder from "../../images/successOrder.svg";
import productDesc1 from "../../images/productDesc1.jpg";
import productDesc2 from "../../images/productDesc2.jpg";
import productDesc3 from "../../images/productDesc3.jpg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Product() {
  const [qty, setQty] = useState(0);
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    city: "",
    product_id: +window.location.pathname.split("/")[2],
    count: qty,
  });
  const [orederStep1, setOrderStep1] = useState(true);
  const [orederStep2, setOrderStep2] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [productObj, setProductObj] = useState({});
  const [productCategory, setProductCategory] = useState({});
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

  const getProductCategory = async (id) => {
    const apiUrl = `${APP_ROUTES.URL}/category/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setProductCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const apiUrl = `${APP_ROUTES.URL}/products/${id}`;

    axios
      .get(apiUrl)
      .then(async (response) => {
        if (!response.data) window.location.href = "/catalog";
        getProductCategory(response.data.category_id);
        setProductObj(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendOrder = () => {
    if (
      orderInfo.name &&
      orderInfo.surname &&
      orderInfo.phone &&
      orderInfo.city
    ) {
      axios
        .post(`${APP_ROUTES.URL}/orders`, orderInfo)
        .then((response) => {
          setOrderStep2(true);
          setOrderStep1(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Заполните все поля!");
    }
  };

  useEffect(() => {
    if (productObj) {
      setIsLoader(false);
    }
  });

  const clickOnOrderBtn = () => {
    if (qty === 0) return toast.error("Выберите количество товара!");
    setIsOpenOrder(true);
  };

  return (
    <>
      <Header hiddenLoader={isLoader}></Header>
      <main className={productObj.color === 2 && "lightTheme"}>
        <ToastContainer />
        <div
          className={`orderPopup ${isOpenOrder ? "" : "hidden"}`}
          onClick={() => closePopup()}
        >
          <div className="orderWrapper" onClick={(e) => e.stopPropagation()}>
            <div className="closePopup" onClick={() => closePopup()}></div>
            <div className={`orderStep1 ${orederStep1 ? "" : "hidden"}`}>
              <h3>Оформить заказ</h3>
              <input
                type="text"
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, name: e.target.value })
                }
                placeholder="Имя"
                maxLength="30"
              />
              <input
                type="text"
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, surname: e.target.value })
                }
                placeholder="Фамилия"
                maxLength="30"
              />
              <input
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, phone: e.target.value })
                }
                type="tel"
                placeholder="Номер телефона"
                maxLength="13"
              />
              <select
                name=""
                id=""
                onChange={(e) =>
                  setOrderInfo({ ...orderInfo, city: e.target.value })
                }
              >
                <option value="" hidden>
                  Город
                </option>
                <option value="Ташкент">Ташкент</option>
                <option value="Самарканд">Самарканд</option>
                <option value="Карши">Карши</option>
                <option value="Бухара">Бухара</option>
                <option value="Джизах">Джизах</option>
                <option value="Андижан">Андижан</option>
                <option value="Наманган">Наманган</option>
                <option value="Фергана">Фергана</option>
                <option value="Хорезм">Хорезм</option>
                <option value="Навои">Навои</option>
                <option value="Кашкадарья">Кашкадарья</option>
              </select>
              <button className="sendOrder" onClick={() => sendOrder()}>
                Заказать
              </button>
            </div>
            <div className={`orderStep2 ${orederStep2 ? "" : "hidden"}`}>
              <img src={successOrder} alt={successOrder} />
              <h3>Заявка принята</h3>
              <p>
                Ваш заказ: {productObj.title} <br /> Количество: {qty} <br />{" "}
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
              {productObj?.image?.images.map((item, index) => (
                <SwiperSlide key={index} className="slideWrapper">
                  <img src={item} alt={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="productDescription">
            <h1>{productObj.title}</h1>
            <p>{productObj.description}</p>
            <div className="categoryWrapper">
              <div className="categoryItem">
                <Link reloadDocument to={`/collection/${productCategory.id}`}>
                  {productCategory.title}
                </Link>
              </div>
            </div>
            <h3>{productObj.price?.toLocaleString()} сум</h3>
            <div className="orderWrapper">
              <button onClick={() => clickOnOrderBtn()}>Заказать</button>
              <div className="qtyInput">
                <p>Количество:</p>
                <div
                  className="minus"
                  onClick={() =>
                    setQty(
                      qty && [
                        qty - 1,
                        setOrderInfo({ ...orderInfo, count: qty - 1 }),
                      ]
                    )
                  }
                >
                  -
                </div>
                <div className="number">{qty}</div>
                <div
                  className="plus"
                  onClick={() => [
                    setQty(qty + 1),
                    setOrderInfo({ ...orderInfo, count: qty + 1 }),
                  ]}
                >
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
                <p>{productObj.compound}</p>
              </div>
              <div className="rule">
                <h3>Действие препарата: </h3>
                <p>{productObj.action}</p>
              </div>
            </div>
            <div className="productRulesWrapper">
              <div className="rule">
                <h3>Показания:</h3>
                <p>{productObj.testimony}</p>
              </div>
              <div className="rule">
                <h3>Противопоказания: </h3>
                <p>{productObj.contraction}</p>
              </div>
            </div>
          </div>
        </section>
        {productObj?.extra?.info1[0] && (
          <section className="imgWithTxt rightTxt">
            <div className="imgWithTxtHeading">
              <h2>{productObj?.extra?.info1[0]}</h2>
              <p>{productObj?.extra?.info1[1]}</p>
            </div>
            <div
              className="imgWithTxtImg"
              style={{ backgroundImage: `url(${productDesc1})` }}
            ></div>
          </section>
        )}
        {productObj?.extra?.info2[0] && (
          <section className="imgWithTxt leftTxt">
            <div className="imgWithTxtHeading">
              <h2>{productObj?.extra?.info2[0]}</h2>
              <p>{productObj?.extra?.info2[1]}</p>
            </div>
            <div
              className="imgWithTxtImg"
              style={{ backgroundImage: `url(${productDesc2})` }}
            ></div>
          </section>
        )}
        {productObj?.extra?.info3[0] && (
          <section className="imgWithTxt rightTxt">
            <div className="imgWithTxtHeading">
              <h2>{productObj?.extra?.info3[0]}</h2>
              <p>{productObj?.extra?.info3[1]}</p>
            </div>
            <div
              className="imgWithTxtImg"
              style={{ backgroundImage: `url(${productDesc3})` }}
            ></div>
          </section>
        )}
      </main>
      <Footer />
      <Outlet />
    </>
  );
}

export default Product;
