import React from "react";
import { ContentStyle } from "./Content.style";
import { FoodItem, Category } from "DummyData/DataTypes";
import { mcSpicy } from "../../../DummyData/McSpicy";
import { ovaltineMcFlurry } from "../../../DummyData/OvaltineMcFlurry";
import { categories } from "../../../DummyData/categories";
import SectionHeader from "./Section/SectionHeader/SectionHeader";
import ItemList from "./Section/ItemList/ItemList";
import { isContinueStatement } from "typescript";

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

export default function Content() {
  let toRenderSectionAndFoodItems: React.ReactElement[] = [];

  categories.forEach((sectionHeader, indexOuter) => {
    const foodItemToRender: { foodItem: FoodItem; index: number }[] = [];
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
      toRenderSectionAndFoodItems.push(
        <SectionHeader name={sectionHeader.name} key={sectionHeader.name} />,
        <ItemList items={foodItemToRender} key={indexOuter} />
      );
    }
  });

  return <ContentStyle>{toRenderSectionAndFoodItems}</ContentStyle>;
}
