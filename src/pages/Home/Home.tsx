import { useState } from "react";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { HomeStyle } from "./Home.style";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

export default function Home() {
  const menuOpen = useSelector((state: RootState) => state.home.menuShow);
  return (
    <>
      {menuOpen && <Menu />}
      <HomeStyle menuOpen={menuOpen}>
        <LogoBar />
        <NavBar />
        <Content />
      </HomeStyle>
    </>
  );
}
