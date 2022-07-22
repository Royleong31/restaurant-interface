import React from "react";
import { Categories } from "../../../DummyData/Categories";
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
          Categories.map((category) => {
            return <CategoryLi key={category.order} category={category} />;
          })
        }
      </ul>
    </MenuModalStyle>
  );
}
