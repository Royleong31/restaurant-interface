import React from "react";
import { MenuModalStyle } from "./MenuModal.style";
import { MenuHandleStyle } from "./MenuHandle.style";
import { CategoryLiStyle } from "./CategoryLi.style";
import { CategoryPosition, HEADER_HEIGHT } from "../Home";
import { SpringValue } from "react-spring";

type Props = {
  categories: CategoryPosition[];
  activeCategory: string;
  onOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
  style: {
    transform: SpringValue<string>;
  };
};

export default function MenuModal({
  categories,
  activeCategory,
  onOverlayClick,
  style,
}: Props) {
  /*categoryClickHandler
    click occurs
    1. menuModal closed
    2. scroll to the category position
    3. Active category is automatically updated by scroll position useEffect.
  */

  const categoryClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const newActiveCategoryName: string = e.currentTarget.innerHTML;
    onOverlayClick(false);
    const newActiveCategory = categories.find((category) => {
      return category.name === newActiveCategoryName;
    });
    const activeOffsetY =
      newActiveCategory !== undefined ? newActiveCategory.offsetY : 0;

    window.scrollTo({ top: activeOffsetY - HEADER_HEIGHT, behavior: "smooth" });
  };

  return (
    <MenuModalStyle style={style}>
      <MenuHandleStyle />
      <ul>
        {categories.map((category) => {
          return (
            <CategoryLiStyle
              key={category.name}
              onClick={categoryClickHandler}
              color={category.name === activeCategory ? "#1c6dc9" : ""}
            >
              {category.name}
            </CategoryLiStyle>
          );
        })}
      </ul>
    </MenuModalStyle>
  );
}
