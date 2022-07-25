import React from "react";
import { ContentStyle } from "./Content.style";
import { FoodItem, Category } from "DummyData/DataTypes";
import { mcSpicy } from "../../../DummyData/mcSpicy";
import { ovaltineMcFlurry } from "../../../DummyData/ovaltineMcFlurry";
import { categories } from "../../../DummyData/categories";
import SectionHeader from "./Section/SectionHeader/SectionHeader";
import ItemList from "./Section/ItemList/ItemList";

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
  return (
    <ContentStyle>
      {categories.map((sectionHeader) => {
        const foodItemToRender: FoodItem[] = [];
        AllFoodItems.forEach((foodItem) => {
          foodItem.categories.forEach((foodItemCategory) => {
            if (sectionHeader.name === foodItemCategory.name) {
              foodItemToRender.push(foodItem);
            }
          });
        });

        return (
          <>
            {foodItemToRender.length === 0 || (
              <SectionHeader name={sectionHeader.name} />
            )}
            <ItemList items={foodItemToRender} />
            {/*Issue with keys here.*/}
          </>
        );
      })}
      {/* <SectionHeader name={Categories[0].name} />
      <ItemList items={AllFoodItems} /> */}
    </ContentStyle>
  );
}
