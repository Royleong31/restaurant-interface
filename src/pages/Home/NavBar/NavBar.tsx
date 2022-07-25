import React from "react";
import { NavBarStyle } from "./NavBar.style";
import MenuBox from "./MenuBox/MenuBox";
import SearchBox from "./SearchBox/SearchBox";

export default function NavBar() {
  return (
    <NavBarStyle>
      <MenuBox />
      <SearchBox />
    </NavBarStyle>
  );
}
