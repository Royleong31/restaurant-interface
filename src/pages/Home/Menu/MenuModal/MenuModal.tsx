import React from "react";
import CategoryLi from "../Category/CategoryLi";
import { MenuModalStyle } from "./MenuModal.style";
import { MenuHandleStyle } from "./MenuHandle.style";

type Props = {
  categories: string[];
};

export default function MenuModal({categories} : Props) {
  return (
    <MenuModalStyle>
      <MenuHandleStyle />
      <ul>
        {categories.map((category) => {
          return <CategoryLi key={category} category={category} />;
        })}
      </ul>
    </MenuModalStyle>
  );
}
