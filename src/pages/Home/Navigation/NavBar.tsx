import React from "react";
import { NavBarStyle } from "./NavBarStyle";
import MenuBox from "./Menu/MenuBox";
import SearchBox from "./Search/SearchBox";

export default function NavBar() {
  return (
    <NavBarStyle>
      <MenuBox />
      <SearchBox />
    </NavBarStyle>
  );
}
