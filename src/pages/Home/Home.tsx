import { useState, useEffect, useCallback, useRef } from "react";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import { HomeHeaderStyle } from "./HomeHeader.style";

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
  });
  const [categories, setCategories] = useState<categoryPosition[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentDivRef = useRef<HTMLDivElement>(null);

  const HEADER_HEIGHT = 119;

  // onMount, add scrollListeners, Initialise categories, y-position, and default activeCategory.
  useEffect(() => {
    function scrollHandler() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", scrollHandler);

    //bugFix. I'm not sure why but if I try to get y-position immediately, the value is incorrect. Have to wait around 70ms, then it will work.
    setTimeout(() => {
      let categoryAndPosition: { category: string; offsetY: number }[] = [];

      const SectionElements = contentDivRef.current?.getElementsByClassName(
        "FoodCategorySectionHeader"
      );
      const length = SectionElements?.length ? SectionElements.length : 0;

      for (let i = 0; i < length; i++) {
        const offsetY =
          (SectionElements?.item(i)?.getBoundingClientRect().top as number) +
          window.scrollY;
        const categoryName = SectionElements?.item(i)?.firstChild
          ?.textContent as string;
        categoryAndPosition.push({ category: categoryName, offsetY: offsetY });
      }
      console.log(categoryAndPosition); //BUG: the offsetY value changes without setTimeout()
      setCategories(categoryAndPosition);
      setActiveCategory(categoryAndPosition[0]);
    }, 70);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  //on scroll, check for change in activeCategory
  useEffect(() => {
    // console.log("In handler");
    // console.log(categories);
    // console.log(activeCategory);

    if (categories.length === 0 || activeCategory.category === "") return; //type guard against null;
    const activeIndex = categories.indexOf(activeCategory);
    const lastIndex = categories.length - 1;

    if (lastIndex === 0) return;

    if (activeIndex === 0) {
      if (scrollPosition >= categories[1].offsetY - HEADER_HEIGHT) {
        setActiveCategory(categories[1]);
      }
    } else if (activeIndex === lastIndex) {
      if (scrollPosition < categories[lastIndex].offsetY - HEADER_HEIGHT) {
        setActiveCategory(categories[lastIndex - 1]);
      }
    } else {
      if (scrollPosition < categories[activeIndex].offsetY - HEADER_HEIGHT) {
        setActiveCategory(categories[activeIndex - 1]);
      } else if (
        scrollPosition >=
        categories[activeIndex + 1].offsetY - HEADER_HEIGHT
      ) {
        setActiveCategory(categories[activeIndex + 1]);
      }
    }
  }, [activeCategory, scrollPosition, categories]);

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
      <Content ref={contentDivRef} />
    </>
  );
}
