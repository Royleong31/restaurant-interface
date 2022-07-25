import React from "react";
import { categories } from "../../../DummyData/categories";
import CategoryLi from "./Category/CategoryLi";
import { MenuModalStyle } from "./MenuModalStyle";

type Props = {};

export default function MenuModal() {
  return (
    <MenuModalStyle>
      <div className="handle" />
      <ul>
        {
          /*iterate through and render the categories
      <Category cat={Categories[0]} active={false}/>
      -Recommended
      -Appetiser
      -...
    */
          categories.map((category) => {
            return <CategoryLi key={category.order} category={category} />;
          })
        }
      </ul>
    </MenuModalStyle>
  );
}
