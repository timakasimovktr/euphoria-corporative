import React from "react";
import OpenArrow from '../../images/Open-Arrow.svg'
const NavBar = ({categories}) => {
  return(
<>
<div>
<ul>
    <div>
    <li>Категории продуктов</li>
    <img src={OpenArrow} alt="" />
    </div>
    {categories.map((category)=>(
        <li key={category.id}></li>
    ))}

</ul>
</div>

</>
  )
};

export default NavBar;
