import React from "react";
import { ContentStyle } from "./Content.style";
import { FoodItem } from "DummyData/DataTypes";
import { categories } from "../../../DummyData/Categories";
import MockDatabase from "DummyData/MockDatabase"; //get data from MockDatabase;
import { SectionHeaderStyle } from "./SectionHeader.style";
import ItemList from "./ItemList/ItemList";

type Props = {};

const Content = React.forwardRef<HTMLDivElement, Props>(
  ({}: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    let toRenderSectionAndFoodItems: React.ReactNode[] = [];

    categories.forEach((sectionHeader, catIndex) => {
      const foodItemToRender: { foodItem: FoodItem; index: number }[] = [];

      MockDatabase.forEach((foodItem, foodIndex) => {
        foodItem.categories.forEach((foodItemCategory) => {
          if (sectionHeader.name === foodItemCategory.name) {
            foodItemToRender.push({
              foodItem: foodItem,
              index: foodIndex,
            });
          }
        });
      });

      if (foodItemToRender.length !== 0) {
        toRenderSectionAndFoodItems.push(
          <SectionHeaderStyle
            className={"FoodCategorySectionHeader"}
            key={sectionHeader.name}
          >
            <h3>{sectionHeader.name}</h3>
          </SectionHeaderStyle>,
          <ItemList items={foodItemToRender} key={catIndex} />
        );
      }
    });

    return <ContentStyle ref={ref}>{toRenderSectionAndFoodItems}</ContentStyle>;
  }
);

export default Content;
