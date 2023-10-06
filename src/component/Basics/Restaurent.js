import React, { useState } from "react";

import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),

  "All",
];

console.log(uniqueList);

const Restaurent = () => {
  const [Menudata, setMenudata] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenudata(Menu);
      return;
    }

    const UpdatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenudata(UpdatedList);
  };

  const navbar = ({ filterItem, menuList }) => {};
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      <MenuCard Menudata={Menudata} />;
    </>
  );
};

export default Restaurent;
