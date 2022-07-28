import { useContext, useState, useEffect } from "react";
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
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const categoryHandler = (
    categoryAndPosition: {
      category: string;
      offsetY: number;
    }[]
  ): void => {
    setActiveCategory(categoryAndPosition[0].category);
    const categories = categoryAndPosition.map(
      (catAndPos) => catAndPos.category
    );
    setCategories(categories);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Mounted");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Dismounted");
    };
  }, []);

  return (
    <>
      {menuShow && (
        <Menu categories={categories} onOverlayClick={setMenuShow} />
      )}
      <HomeHeaderStyle>
        <LogoBar />
        <NavBar
          menuClickHandler={setMenuShow}
          activeCategory={scrollPosition.toString()} //for debugging
        />
      </HomeHeaderStyle>
      <Content onCategoryLoad={categoryHandler} />
    </>
  );
}
