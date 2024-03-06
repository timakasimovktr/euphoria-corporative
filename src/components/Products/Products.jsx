import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import arrowRightIcon from "../../images/Light-Slider-Arrow.svg";
import "./Products.scss";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import ShopHeader from "../ShopHeader/ShopHeader";
import ProductCard from "../ProductCard/ProductCard";

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
                  <ProductCard products={item}></ProductCard>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Products;
