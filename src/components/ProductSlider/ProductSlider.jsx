import React from "react";
import { useState } from "react";
import arrow from "../../images/ProductArrow.svg";
import "./ProductSlider.scss";
import png from '../../images/AboutUsPic.png'
const ProductSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="product-slider">
        <button onClick={goToPrevSlide} className="left-arrow">
          <img src={arrow} alt="" />
        </button>
        <div className="product-photo">
          <img
            src={slides[currentIndex].img}
            // src={png}
            alt="product-photo"
          />
        </div>
        <button onClick={goToNextSlide} className="right-arrow">
          <img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" />
        </button>
      </div>
    </>
  );
};
export default ProductSlider;
