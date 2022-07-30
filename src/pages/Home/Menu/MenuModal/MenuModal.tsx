import React from "react";
import { MenuModalStyle } from "./MenuModal.style";
import { MenuHandleStyle } from "./MenuHandle.style";
import { CategoryLiStyle } from "./CategoryLi.style";
import { CategoryPosition, HEADER_HEIGHT } from "../../Home";

type Props = {
  categories: CategoryPosition[];
  activeCategory: string;
  onOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuModal({
  categories,
  activeCategory,
  onOverlayClick,
}: Props) {
  /*categoryClickHandler
    click occurs
    1. activeCategory set to the category that is clicked
    2. menuModal closed
    3. scroll to the category position
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
    <MenuModalStyle>
      <MenuHandleStyle />
      <ul>
        {categories.map((category) => {
          return (
            <CategoryLiStyle
              key={category.name}
              className={
                category.name === activeCategory ? "activeCategory" : ""
              }
              onClick={categoryClickHandler}
            >
              {category.name}
            </CategoryLiStyle>
          );
        })}
      </ul>
    </MenuModalStyle>
  );
}
