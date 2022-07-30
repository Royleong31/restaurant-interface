import React from "react";
import { MenuModalStyle } from "./MenuModal.style";
import { MenuHandleStyle } from "./MenuHandle.style";
import { CategoryLiStyle } from "./CategoryLi.style";

type Props = {
  categories: string[];
  activeCategory: { category: string; offsetY: number };
};

export default function MenuModal({ categories, activeCategory }: Props) {
  return (
    <MenuModalStyle>
      <MenuHandleStyle />
      <ul>
        {categories.map((category) => {
          if (category === activeCategory.category)
            return (
              <CategoryLiStyle key={category} className="activeCategory">
                {category}
              </CategoryLiStyle>
            );
          return <CategoryLiStyle key={category}>{category}</CategoryLiStyle>;
        })}
      </ul>
    </MenuModalStyle>
  );
}
