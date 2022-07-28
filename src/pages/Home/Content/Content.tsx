import React from "react";
import { ContentStyle } from "./Content.style";
import { FoodItem, Category } from "DummyData/DataTypes";
import { mcSpicy } from "../../../DummyData/McSpicy";
import { ovaltineMcFlurry } from "../../../DummyData/OvaltineMcFlurry";
import { categories } from "../../../DummyData/Categories";
import { SectionHeaderStyle } from "./SectionHeader.style";
import ItemList from "./Section/ItemList/ItemList";

type Props = {
  onCategoryLoad: (categoryAndPosition: {
    category: string;
    offsetY: number;
  }[]) => void;
};

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

export default function Content({ onCategoryLoad }: Props) {
  let toRenderSectionAndFoodItems: React.ReactElement[] = [];
  let categoryAndPosition: { category: string; offsetY: number }[] = [];

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
      categoryAndPosition.push({
        category: sectionHeader.name,
        offsetY:
          document
            .getElementsByClassName(sectionHeader.name)[0]
            .getBoundingClientRect().top + window.scrollY,
      });
      toRenderSectionAndFoodItems.push(
        <SectionHeaderStyle
          className={sectionHeader.name}
          key={sectionHeader.name}
        >
          <h3>{sectionHeader.name}</h3>
        </SectionHeaderStyle>,
        <ItemList items={foodItemToRender} key={indexOuter} />
      );
    }
  });

  return <ContentStyle>{toRenderSectionAndFoodItems}</ContentStyle>;
}
