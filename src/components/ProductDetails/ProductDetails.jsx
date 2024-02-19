import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../Slider/Slider";
import Header from "../Header/Header";
import ShopHeader from "../ShopHeader/ShopHeader";
import "./ProductDetails.scss";
import { APP_ROUTES } from "../../router/Route";
import IncrementDecrementBtn from "../IncrementDecrementBtn/IncrementDecrementBtn";
import Footer from "../Footer/Footer";
const ProductDetails = () => {
  const products = [
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
      category: " 2",
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
  
  const navigation = useNavigate();

  let { productId } = useParams();
  const slides = [
    {
      url: "",
    },
  ];
  // Fetch product details based on productId
  return (
    <>
      <Header></Header>
      <ShopHeader></ShopHeader>
      <div className="product-details">
        <div className="product-details-wrapper container">
          <div className="product-card">
            <div className="product-info-img">
              <Slider slides={slides}></Slider>
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
                  <button type="submit" className="add-to-cart-btn">
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
                    onClick={() => navigation(APP_ROUTES.PRODUCT)}
                  >
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
