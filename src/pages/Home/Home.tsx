import { useContext } from "react";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { HomeStyle } from "./Home.style";
import HomeContext from "redux/HomeContext/HomeContext";
import { HomeHeaderStyle } from "./HomeHeader.style";

export default function Home() {
  const homeContext = useContext(HomeContext);
  return (
    <>
      {homeContext.homeState.menuShow && <Menu />}
      <HomeStyle menuOpen={homeContext.homeState.menuShow}>
        <HomeHeaderStyle>
          <LogoBar />
          <NavBar />
        </HomeHeaderStyle>
        <Content />
      </HomeStyle>
    </>
  );
}
