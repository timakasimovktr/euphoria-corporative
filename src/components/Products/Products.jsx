import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import "./Products.scss";
import xClose from '../../images/x-close.svg'
import NavBar from "../NavBar/NavBar";
const Products = () => {
  const [modalInfo, setModalInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [changeModal, setChangeModal] = useState(1);

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
      composition:
        "изготавливаются в форме органоспецифических протеолипосом путем купажирования различных растений.",
      effect:
        "предотвращает развитие простаты. Уменьшает воспаление простаты. Улучшение мочеиспускание.",
      indications:
        "изготавливаются в форме органоспецифических протеолипосом путем купажирования различных растений.",
      contraindications:
        "изготавливаются в форме органоспецифических протеолипосом путем купажирования различных растений.",
    },
    {
      id: 2,
      category: "Category 2",
      name: "Product 2",
      description: "Description 2",
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

  return (
    <>
      <Header />
      <main className="products-main">
        <NavBar categories={cate}>

        </NavBar>
        <div className="category-wrapper container">
          {Object.entries(productsByCategory).map(([category, products]) => (
            <div key={category} className="distinct-category-wrapper">
              <h2>{category}</h2>
              <div className="product-grid">
                {products.map((item) => (
                  <div className="product-card" key={item.id}>
                    <div className="product-image">
                      <img src={item.img} alt="" />
                    </div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <button
                      className="products-button"
                      onClick={() => openModal(item)}
                    >
                      Заказать
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
