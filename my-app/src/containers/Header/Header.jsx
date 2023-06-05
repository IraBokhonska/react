import React from "react";

import Logo from "../../elements/Logo";
import MenuItem from "../../elements/MenuItem";

import "../../assets/styles/containers/header.scss";

function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <h1 className="blog-name-header">Blog name</h1>
      <nav className="navigation">
        <ul className="menu">
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
