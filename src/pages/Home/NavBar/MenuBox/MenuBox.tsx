import React from "react";
import { MenuStyle } from "./Menu.style";
import { DownArrow } from "assets/svgs/index";
import { onMenuOpen } from "redux/slices/homeSlice";
import { useDispatch } from "react-redux";

export default function MenuBox() {
  //Get state of scroll position to know what is being viewed.
  //{Recommended, Appetiser, Main, Drinks, ...}
  const dispatch = useDispatch();

  return (
    <MenuStyle onClick={() => dispatch(onMenuOpen())}>
      Recommended
      <DownArrow />
    </MenuStyle>
  );
}
