import React from "react";
import { MenuStyle } from "./MenuStyle";
import { DownArrow } from "assets/svgs/index";

type Prop = {
  onMenuClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuBox({ onMenuClick }: Prop) {
  //Get state of scroll position to know what is being viewed.
  //{Recommended, Appetiser, Main, Drinks, ...}

  return (
    <MenuStyle
      onClick={() => {
        onMenuClick(true);
      }}
    >
      Recommended
      <DownArrow />
    </MenuStyle>
  );
}
