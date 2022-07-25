import React, { useContext } from "react";
import { MenuStyle } from "./Menu.style";
import { DownArrow } from "assets/svgs/index";
// import { onMenuOpen } from "redux/slices/homeSlice";
// import { useDispatch } from "react-redux";
import HomeContext from "redux/HomeContext/HomeContext";

export default function MenuBox() {
  //Get state of scroll position to know what is being viewed.
  //{Recommended, Appetiser, Main, Drinks, ...}
  // const dispatch = useDispatch();
  const homeContext = useContext(HomeContext);

  return (
    <MenuStyle onClick={homeContext.onMenuOpen}>
      Recommended
      <DownArrow />
    </MenuStyle>
  );
}
