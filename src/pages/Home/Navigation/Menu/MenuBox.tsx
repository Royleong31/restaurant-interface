import React from "react";
import { MenuStyle } from "./MenuStyle";

export default function MenuBox() {
  //Get state of scroll position to know what is being viewed.
  //{Recommended, Appetiser, Main, Drinks, ...}

  return (
    <MenuStyle>
      Recommended
      <img src="DownArrow.svg" alt="down arrow" />
    </MenuStyle>
  );
}
