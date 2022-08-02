import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useTransition } from "react-spring";
import LogoBar from "components/LogoBar";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Overlay from "components/Overlay";
import MenuModal from "./Menu/MenuModal";
import { HomeHeaderStyle } from "./HomeHeader.style";

export type CategoryPosition = {
  name: string;
  offsetY: number;
};

export const HEADER_HEIGHT = 119;
export const BORDER_TOP_WIDTH = 8;
export const WINDOW_HEIGHT = window.innerHeight;

export default function Home() {
  // TODO: Future implementation
  // const [searchShow, setSearchShow] = useState(false);
  // const [basketShow, setBasketShow] = useState(false);
  // const [orderHistoryShow, setOrderHistoryShow] = useState(false);

  const [menuShow, setMenuShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState<CategoryPosition[]>([]);
  const contentDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function scrollHandler() {
      if (categories.length === 0) return; //guard against unloaded state;
      const scrollPosition = window.scrollY;
      let activeIndex = -1;
      categories.forEach((category) => {
        if (scrollPosition >= category.offsetY - HEADER_HEIGHT) {
          activeIndex++;
        }
      });
      setActiveCategory(categories[activeIndex].name);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [categories]);

  useEffect(() => {
    // console.log("Mounted");
    function loadHandler() {
      // console.log("Loaded");
      let categoryAndPosition: CategoryPosition[] = [];

      const SectionElements = contentDivRef.current?.getElementsByClassName(
        "FoodCategorySectionHeader"
      );
      const length = SectionElements?.length ? SectionElements.length : 0;

      for (let i = 0; i < length; i++) {
        let offsetY =
          (SectionElements?.item(i)?.getBoundingClientRect().top as number) +
          window.scrollY;
        if (i !== 0) offsetY += BORDER_TOP_WIDTH;
        const categoryName = SectionElements?.item(i)?.firstChild
          ?.textContent as string;
        categoryAndPosition.push({ name: categoryName, offsetY: offsetY });
      }
      setCategories(categoryAndPosition);
      setActiveCategory(categoryAndPosition[0].name);
    }
    loadHandler();

    window.addEventListener("load", loadHandler);
    return () => {
      window.removeEventListener("load", loadHandler);
    };
  }, []);

  const portalElement = document.getElementById("overlays") || new Element();

  const menuModalTransition = useTransition(menuShow, {
    from: { transform: "translateY(100vh)" },
    enter: { transform: "translateY(0vh)" },
    leave: { transform: "translateY(100vh)" },
    config: {
      mass: 0.7,
      tension: 238,
      friction: 25,
      velocity: 0.006,
    },
  });
  const overlayTransition = useTransition(menuShow, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 0.7,
      tension: 238,
      friction: 25,
      velocity: 0.006,
    },
  });

  return (
    <>
      {menuModalTransition(
        (styles, menuShow) =>
          menuShow && (
            <>
              {ReactDOM.createPortal(
                <MenuModal
                  categories={categories}
                  activeCategory={activeCategory}
                  onOverlayClick={setMenuShow}
                  style={styles}
                />,
                portalElement
              )}
            </>
          )
      )}
      {overlayTransition(
        (styles, menuShow) =>
          menuShow && (
            <>
              {ReactDOM.createPortal(
                <Overlay onCloseModal={setMenuShow} style={styles} />,
                portalElement
              )}
            </>
          )
      )}
      <HomeHeaderStyle>
        <LogoBar />
        <NavBar
          menuClickHandler={setMenuShow}
          activeCategory={activeCategory}
        />
      </HomeHeaderStyle>
      <Content ref={contentDivRef} />
    </>
  );
}
