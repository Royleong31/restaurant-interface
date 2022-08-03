import React from "react";
import { ContentStyle } from "./Content.style";
import { FoodItem } from "DummyData/DataTypes";
import { categories } from "../../../DummyData/Categories";
import { SectionHeaderStyle } from "./SectionHeader.style";
import ItemList from "./ItemList/ItemList";
import MockDatabase from "../../../DummyData/MockDatabase"; //fetched data from database

type Props = {};

const Content = React.forwardRef<HTMLDivElement, Props>(
  ({}: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    let toRenderSectionAndFoodItems: React.ReactNode[] = []; //This variable is returned.

    categories.forEach((sectionHeader, catIndex) => {
      const foodItemToRender: { foodItem: FoodItem; index: number }[] = []; //foodItems for each section.

      //check if foodItem category matches currentCategory, then add to foodItemToRender.
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
        //Add to sectionName and sectionScrollPosition to variable.

        //Add to return variable
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
