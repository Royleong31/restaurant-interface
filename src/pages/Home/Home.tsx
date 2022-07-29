import { useState, useEffect, useCallback } from "react";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { HomeHeaderStyle } from "./HomeHeader.style";

const HEADER_HEIGHT = 119;
type categoryPosition = {
  category: string;
  offsetY: number;
};

export default function Home() {
  // TODO: Future implementation
  // const [searchShow, setSearchShow] = useState(false);
  // const [basketShow, setBasketShow] = useState(false);
  // const [orderHistoryShow, setOrderHistoryShow] = useState(false);

  const [menuShow, setMenuShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState<categoryPosition>({
    category: "",
    offsetY: 0,
  }); //dependent on scroll position and categories
  const [categories, setCategories] = useState<categoryPosition[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  // add and remove scrollListener on Home mount and dismount. On scroll event, handleScroll is called, which updates scrollPosition.
  useEffect(() => {
    function scrollHandler() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", scrollHandler);
    console.log("Mounted");

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      console.log("Dismounted");
    };
  }, []);

  //set categories and default activeCategory
  useEffect(() => {
    console.log("Set categories.");
    let categoryAndPosition: { category: string; offsetY: number }[] = [];

    const sectionElements = document.querySelectorAll(
      `.FoodCategorySectionHeader`
    );
    console.log(sectionElements);
    console.log((sectionElements[1] as HTMLElement).offsetTop);
    const secondItem = sectionElements.item(1) as HTMLElement;
    console.log(secondItem);
    console.log(secondItem.offsetTop);
    console.log(sectionElements.item(1).getBoundingClientRect().top);

    const sectionHtmlElements = document.getElementsByTagName("section");
    console.log(sectionHtmlElements);
    console.log(sectionHtmlElements.item(1));
    console.log(sectionHtmlElements.item(1)?.offsetTop);
    // sectionElements.forEach((sectionElement) => {
    //   if (
    //     sectionElement.firstChild !== null &&
    //     sectionElement.firstChild.textContent !== null
    //   ) {
    //     const category: string = sectionElement.firstChild.textContent;

    //     categoryAndPosition.push({
    //       category: category,
    //       offsetY: sectionElement.getBoundingClientRect().top + window.scrollY,
    //     });
    //   }
    // });
    // setCategories(categoryAndPosition); //update category state
    // setActiveCategory(categoryAndPosition[0]); //update activeCategoryState
    // console.log(categoryAndPosition);
    // console.log(categoryAndPosition[0]);
  }, []);

  // useEffect(() => {
  //   const activeIndex = categories.indexOf(activeCategory);
  //   const lastIndex = categories.length - 1;

  //   console.log(scrollPosition);
  //   console.log(activeCategory);

  //   if (lastIndex === 0) return;

  //   if (activeIndex === 0) {
  //     if (scrollPosition >= categories[1].offsetY - HEADER_HEIGHT) {
  //       setActiveCategory(categories[1]);
  //     }
  //   } else if (activeIndex === lastIndex) {
  //     if (scrollPosition < categories[lastIndex].offsetY - HEADER_HEIGHT) {
  //       setActiveCategory(categories[lastIndex - 1]);
  //     }
  //   } else {
  //     if (scrollPosition < categories[activeIndex].offsetY - HEADER_HEIGHT) {
  //       setActiveCategory(categories[activeIndex - 1]);
  //     } else if (
  //       scrollPosition >=
  //       categories[activeIndex + 1].offsetY - HEADER_HEIGHT
  //     ) {
  //       setActiveCategory(categories[activeIndex + 1]);
  //     }
  //   }
  //   console.log(scrollPosition);
  // }, [scrollPosition]);

  return (
    <>
      {menuShow && (
        <Menu
          categories={categories.map((category) => category.category)}
          onOverlayClick={setMenuShow}
        />
      )}
      <HomeHeaderStyle>
        <LogoBar />
        <NavBar
          menuClickHandler={setMenuShow}
          activeCategory={activeCategory.category} //for debugging, will change to activeCategory
        />
      </HomeHeaderStyle>
      <Content
        setActiveCategory={setActiveCategory}
        setCategories={setCategories}
      />
    </>
  );
}
