import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import xClose from "../../images/x-close.svg";
import NavBar from "../NavBar/NavBar";
import arrowRightIcon from "../../images/Light-Slider-Arrow.svg";
import "./Products.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import ShopHeader from "../ShopHeader/ShopHeader";

const Products = () => {
  const navigation = useNavigate();
  const [modalInfo, setModalInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleProductDetailsClick = (productId) => {
    navigation(`${APP_ROUTES.PRODUCT}/${productId}`);
  };
  const openModal = (item) => {
    setModalInfo(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const info = [
    {
      id: 1,
      category: "Category 1",
      name: "Multi Health",
      description: "Чай для похудения",
      img: "",
      composition: "изготавливаются...",
      effect: "предотвращает...",
      indications: "изготавливаются...",
      contraindications: "изготавливаются...",
    },
    {
      id: 2,
      category: "Category 2",
      name: "Product 2",
      description: "Description 2",
      price: 100000,
      img: "",
      composition: "Composition 2",
      effect: "Effect 2",
      indications: "Indications 2",
      contraindications: "Contraindications 2",
    },
    // Add more products with different categories as needed
  ];

  // Function to group products by category
  const productsByCategory = info.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

  // Extract categories from productsByCategory object
  const categories = Object.keys(productsByCategory);

  return (
    <>
      <Header />
      <ShopHeader></ShopHeader>
      <main className="products-main container">
        <NavBar categories={categories} />
        <div className="category-wrapper">
          {Object.entries(productsByCategory).map(([category, products]) => (
            <div key={category} className="distinct-category-wrapper">
              <div className="category-title">
                <h2>{category}</h2>
                <hr />
                <button className="watch-all-btn">
                  посмотреть все <img src={arrowRightIcon} alt="" />
                </button>
              </div>

              <div className="product-grid">
                {products.map((item) => (
                  <div className="product-card" key={item.id}>
                    <div className="product-image">
                      <div className="gray-element"></div>
                      <div className="black-element"></div>
                      <img src={item.img} alt="" />
                    </div>
                    <div className="price-block">
                      <b>Цена:</b> {item.price} сум
                    </div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <button
                      className="products-button"
                      onClick={() =>
                        navigation(APP_ROUTES.PRODUCT)
                      }
                    >
                      Подробнее
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <img src={xClose} alt="" className="cross-logo" />
          {modalInfo && (
            <div className="modal-wrapper">
              <img src={modalInfo.img} alt="" />
              <div className="modal-product-desc">
                <h3>{modalInfo.name}</h3>
                <div className="modal-product-desc-text">
                  <p>
                    <span className="product-desc-title">СОСТАВ: </span>{" "}
                    {modalInfo.composition}
                  </p>
                  <p>
                    <span className="product-desc-title">
                      ДЕЙСТВИЕ ПРЕПАРАТА:
                    </span>
                    {modalInfo.effect}
                  </p>
                  <p>
                    <span className="product-desc-title">ПОКАЗАНИЯ: </span>
                    {modalInfo.indications}
                  </p>
                  <p>
                    <span className="product-desc-title">
                      ПРОТИВОПОКАЗАНИЯ:{" "}
                    </span>
                    {modalInfo.contraindications}
                  </p>

                  <button
                    className="products-button"
                    // onClick={() => handleOrderClick(item)}
                  >
                    оформить заказ
                  </button>
                </div>
                <div className="modal-product-form">
                  <form action="">
                    <p>Введите имя и фамилию</p>
                    <input type="text" />
                    <hr />
                    <p>Введите номер телефона</p>
                    <input
                      type="tel"
                      placeholder="+998 (__) ___ __ __"
                      pattern="\+998\s\([0-9]{2}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}"
                    />
                    <button className="products-button">Заказать</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </main>
      <Footer />
    </>
  );
};

export default Products;
