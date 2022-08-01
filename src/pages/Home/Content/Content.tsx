import React, { useEffect } from "react";
import { ContentStyle } from "./Content.style";
import { FoodItem, Category } from "DummyData/DataTypes";
import { mcSpicy } from "../../../DummyData/McSpicy";
import { ovaltineMcFlurry } from "../../../DummyData/OvaltineMcFlurry";
import { categories } from "../../../DummyData/Categories";
import { SectionHeaderStyle } from "./SectionHeader.style";
import ItemList from "./ItemList/ItemList";

type Props = {};

//Fetch ALlFoodItems from database
const AllFoodItems: FoodItem[] = [
  mcSpicy,
  mcSpicy,
  mcSpicy,
  mcSpicy,
  mcSpicy,
  mcSpicy,
  ovaltineMcFlurry,
  ovaltineMcFlurry,
  ovaltineMcFlurry,
];

const Content = React.forwardRef<HTMLDivElement, Props>(
  ({}: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    let toRenderSectionAndFoodItems: React.ReactNode[] = []; //This variable is returned.

    categories.forEach((sectionHeader, indexOuter) => {
      const foodItemToRender: { foodItem: FoodItem; index: number }[] = []; //foodItems for each section.

      //check if foodItem category matches currentCategory, then add to foodItemToRender.
      AllFoodItems.forEach((foodItem, indexInner) => {
        foodItem.categories.forEach((foodItemCategory) => {
          if (sectionHeader.name === foodItemCategory.name) {
            foodItemToRender.push({
              foodItem: foodItem,
              index: indexOuter * 10 + indexInner,
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
          <ItemList items={foodItemToRender} key={indexOuter} />
        );
      }
    });

    return <ContentStyle ref={ref}>{toRenderSectionAndFoodItems}</ContentStyle>;
  }
);

export default Content;
