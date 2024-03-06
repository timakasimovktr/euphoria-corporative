import React from "react";
import "./NavBar.scss";
import OpenArrow from "../../images/Open-Arrow.svg";
import { useState } from "react";
const NavBar = ({ categories }) => {
  const [openArrow, setOpenArrow] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <ul>
          <div className="nav-bar-title">
            <li>Категории продуктов</li>
            {openArrow ? (
              <img
                onClick={() => setOpenArrow(!openArrow)}
                src={OpenArrow}
                style={{ transform: "rotate(180deg" }}
                alt=""
              />
            ) : (
              <img
                onClick={() => setOpenArrow(!openArrow)}
                src={OpenArrow}
                alt=""
              />
            )}
          </div>

          {openArrow &&
            categories.map((category) => (
              <div className="nav-bar-category">
                <li key={category.id}>{category} </li>
                <span>22</span>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
