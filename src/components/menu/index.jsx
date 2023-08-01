import React from "react";
import { MENUITEMS } from "../../data/constant";
import cntl from "cntl";
import MenuItem from "./menuItem";

const className = {
  menuBox: cntl`flex gap-2`,
};
const Menu = () => {
  const menu = (
    <section className={className.menuBox}>
      {MENUITEMS.map((menuItem) => {
        return (
          <MenuItem
            key={menuItem.id}
            link={menuItem.link}
            pageName={menuItem.page}
          />
        );
      })}
    </section>
  );
  return menu;
};

export default Menu;
