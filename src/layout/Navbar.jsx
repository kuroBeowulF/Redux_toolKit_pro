import React from "react";
import cntl from "cntl";
import Menu from "./../components/menu/index";
import { Link } from "react-router-dom";

const className = {
  navBar: cntl`w-full h-24 bg-slate-500 drop-shadow-xl flex p-4 justify-between items-center`,
  title: cntl`text-white/90 hover:text-white font-bold text-2xl font-serif`,
};

const Navbar = () => {
  return (
    <nav className={className.navBar}>
      <Link to="/" className={className.title}>
        Redux ToolKit
      </Link>
      <Menu />
    </nav>
  );
};

export default Navbar;
