import React from "react";
import './ProductCard.scss'
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";

const ProductCard = ({products}) => {
  const navigation = useNavigate();

    return(<>
           <div className="product-card" key={products.id}>
                    <div className="product-image">
                      <div className="gray-element"></div>
                      <div className="black-element"></div>
                      <img src={products.img} alt="" />
                    </div>
                    <div className="price-block">
                      <b>Цена:</b> {products.price} сум
                    </div>
                    <h4>{products.name}</h4>
                    <p>{products.description}</p>
                    <button
                      className="products-button"
                      onClick={() =>
                        navigation(APP_ROUTES.PRODUCT)
                      }
                    >
                      Подробнее
                    </button>
                  </div>
        </>)
}

export default ProductCard;