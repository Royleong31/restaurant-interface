import React from "react";
import { LogoBarStyle } from "./LogoBarStyle";
import { ReactComponent as RestaurantLogo } from "../assets/svgs/RestaurantLogo.svg";

export default function LogoBar() {
  return (
    <LogoBarStyle>
      <RestaurantLogo />
    </LogoBarStyle>
  );
}
