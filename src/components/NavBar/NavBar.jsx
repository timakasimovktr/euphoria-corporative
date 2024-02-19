import React from "react";
import "./NavBar.scss";
import OpenArrow from "../../images/Open-Arrow.svg";
const NavBar = ({ categories }) => {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <div className="nav-bar-title">
            <li>Категории продуктов</li>
            <img src={OpenArrow} alt="" />
          </div>
          {categories.map((category) => (
            <div className="nav-bar-category">
              <li  key={category.id}>{category} </li>
              <span>22</span>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
