import React from "react";
import { categories } from "DummyData/Categories";
import CategoryLi from "../Category/CategoryLi";
import { MenuModalStyle } from "./MenuModal.style";
import { MenuHandleStyle } from "./MenuHandle.style";

type Props = {};

export default function MenuModal() {
  return (
    <MenuModalStyle>
      <MenuHandleStyle />
      <ul>
        {categories.map((category) => {
          return <CategoryLi key={category.order} category={category} />;
        })}
      </ul>
    </MenuModalStyle>
  );
}
