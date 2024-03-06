import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.scss";
// components
import Header from "../Header/Header";
import ShopHeader from "../ShopHeader/ShopHeader";
import IncrementDecrementBtn from "../IncrementDecrementBtn/IncrementDecrementBtn";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import ProductSlider from "../ProductSlider/ProductSlider";
// images
import productPhoto from "../../images/product-photo.png";
import checkCircle from "../../images/Check-Circle.svg";
import ProductCard from "../ProductCard/ProductCard";
const ProductDetails = () => {
  const products = [
    {
      id: 1,
      category: "Category 1",
      name: "Multi Health",
      description: "Чай для похудения",
      img: "../../images/product-photo.png",
      composition: "изготавливаются...",
      effect: "предотвращает...",
      indications: "изготавливаются...",
      contraindications: "изготавливаются...",
    },
    {
      id: 2,
      category: " 2",
      name: "Product 2",
      description: "Description 2",
      price: 100000,
      img: "../../images/AboutUsPic.png",
      composition: "Composition 2",
      effect: "Effect 2",
      indications: "Indications 2",
      contraindications: "Contraindications 2",
    },
    // Add more products with different categories as needed
  ];
  const navigation = useNavigate();
  const slides = [
    {
      img: productPhoto,
    },
    {
      img: "../../images/AboutUsPic.png",
    },
  ];
  const [modal, setModal] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);
  return (
    <>
      <Header></Header>
      <ShopHeader></ShopHeader>
      <Modal visible={modal} setVisible={setModal}>
        {currentForm == 1 && (
          <>
            <div className="modal-content-wrapper">
              <h2>Оформить заказ</h2>
              <form action="">
                <div className="inputs-wrapper">
                  <input type="text" placeholder="Имя" name="name" id="" />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    name="surname"
                    id=""
                  />
                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    name="phone-num"
                    id=""
                  />
                  <select name="city" id="">
                    <option disabled value="">
                      Город
                    </option>
                    <option value="Tashkent">Ташкент</option>
                    <option value="Tashkent">Самарканд</option>
                    <option value="Tashkent">Карши</option>
                  </select>
                </div>
                <button onClick={() => setCurrentForm(2)}>Отправить </button>
              </form>
            </div>
          </>
        )}

        {currentForm == 2 && (
          <>
            <div className="modal-content-wrapper">
              <img src={checkCircle} alt="" />
              <h3>Заявка принята</h3>
            </div>
          </>
        )}
      </Modal>
      <div className="product-details">
        <div className="product-details-wrapper container">
          <div className="product-details-card">
            <div className="product-info-img">
              <ProductSlider slides={slides}></ProductSlider>
            </div>
            <div className="short-product-info">
              <div>
                <h3>MULTI HEALTH</h3>
                <p className="product-price">Цена: {1000000} СУМ</p>
                <p className="product-description">
                  ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКС
                  ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКС ТЕКСТ ТЕКСТ ТЕКСТ
                  ТЕКСТ ТЕКСТ
                  <b> еще...</b>
                </p>
              </div>

              <div>
                <div className="product-buttons">
                  <button
                    onClick={() => {
                      setModal(true);
                      setCurrentForm(1);
                    }}
                    type="submit"
                    className="add-to-cart-btn"
                  >
                    ЗАКАЗАТЬ
                  </button>
                  <div className="incr-decr">
                    <p>Количество</p>
                    <IncrementDecrementBtn
                      maxValue={10}
                    ></IncrementDecrementBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description-block">
        <div className="product-description-block-wrapper container">
          <div className="product-description-grid">
            <div className="product-description-column">
              <p className="product-param">состав:</p>
              <p>
                Изготавливаются в форме органоспецифических протеолипосом путем
                купажирования различных растений.
              </p>
            </div>
            <div className="product-description-column">
              <p className="product-param">состав:</p>
              <p>
                Изготавливаются в форме органоспецифических протеолипосом путем
                купажирования различных растений.
              </p>
            </div>
            <div className="product-description-column">
              <p className="product-param">состав:</p>
              <p>
                Изготавливаются в форме органоспецифических протеолипосом путем
                купажирования различных растений.
              </p>
            </div>
            <div className="product-description-column">
              <p className="product-param">состав:</p>
              <p>
                Изготавливаются в форме органоспецифических протеолипосом путем
                купажирования различных растений.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="new-products">
        <div className="new-products-wrapper container">
          <h1>Новые товары</h1>
          <hr />
            <div className="product-grid">
              {products.map((item) => (
             
             <ProductCard products={item}></ProductCard>
             
             ))}
            </div>
          </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
