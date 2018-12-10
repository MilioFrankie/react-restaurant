import React from "react";
import Menu from "./Menu";

const MenuList = ({ menus }) => (
  <div>
    <h1>Menu</h1>
    <hr />
    {menus.map(m => (
      <Menu key={m.id} {...m} />
    ))}
  </div>
);

export default MenuList;
