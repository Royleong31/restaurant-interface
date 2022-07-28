import { useContext, useState } from "react";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { HomeHeaderStyle } from "./HomeHeader.style";
import { categories } from "DummyData/Categories";

export default function Home() {
  const [menuShow, setMenuShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [basketShow, setBasketShow] = useState(false);
  const [orderHistoryShow, setOrderHistoryShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <>
      {menuShow && <Menu onOverlayClick={setMenuShow} />}
      <HomeHeaderStyle>
        <LogoBar />
        <NavBar menuClickHandler={setMenuShow} activeCategory={activeCategory}/>
      </HomeHeaderStyle>
      <Content />
    </>
  );
}
