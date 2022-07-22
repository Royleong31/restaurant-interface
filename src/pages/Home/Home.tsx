import { useState } from "react";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { HomeStyle } from "./HomeStyle";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {menuOpen && <Menu onCloseMenu={setMenuOpen} />}
      <HomeStyle menuOpen={menuOpen}>
        <LogoBar />
        <NavBar onMenuClick={setMenuOpen} onSearchClick={() => {}} />
        <Content />
      </HomeStyle>
    </>
  );
}
