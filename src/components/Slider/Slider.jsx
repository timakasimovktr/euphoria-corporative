import React from "react";
import { useState } from "react";
import darkSliderArrow from "../../images/Dark-Slider-Arrow.svg";
import lightSliderArrow from "../../images/Light-Slider-Arrow.svg";

const Slider = ({ slides, dark }) => {
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
      <div className="quote-slider">
        {dark ? (
          <button onClick={goToPrevSlide} className="left-arrow">
            <img
              src={darkSliderArrow}
              style={{ transform: "rotate(180deg)" }}
              alt=""
            />
          </button>
        ) : (
          <button onClick={goToPrevSlide} className="left-arrow">
            <img
              src={lightSliderArrow}
              style={{ transform: "rotate(180deg)" }}
              alt=""
            />
          </button>
        )}

        <div className="quote-person">
          <div>
            <img
              className="slider-avatar"
              src={slides[currentIndex].img}
              alt=""
            />
            <h5>{slides[currentIndex].name}</h5>
            <h6>{slides[currentIndex].description}</h6>
          </div>
        </div>
        {dark ? (
          <button onClick={goToNextSlide} className="right-arrow">
            <img src={darkSliderArrow} alt="" />
          </button>
        ) : (
          <button onClick={goToNextSlide} className="right-arrow">
            <img src={lightSliderArrow} alt="" />
          </button>
        )}
      </div>
    </>
  );
};
export default Slider;
