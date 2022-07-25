import React from "react";
import { NavBarStyle } from "./NavBar.style";
import MenuBox from "./MenuBox/MenuBox";
import SearchBox from "./SearchBox/SearchBox";

type Prop = {
  onMenuClick: React.Dispatch<React.SetStateAction<boolean>>;
  onSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ onMenuClick, onSearchClick }: Prop) {
  return (
    <NavBarStyle>
      <MenuBox onMenuClick={onMenuClick}/>
      <SearchBox />
    </NavBarStyle>
  );
}
