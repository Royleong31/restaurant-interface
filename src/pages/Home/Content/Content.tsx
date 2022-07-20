import React from "react";
import { ContentStyle } from "./ContentStyle";
import { McSpicy, FoodItem, Categories } from "DummyData";

const AllFoodItems: FoodItem[] = [
  McSpicy,
  McSpicy,
  McSpicy,
  McSpicy,
  McSpicy,
  McSpicy,
];

//trying to render 6 cards of identical McSpicy foodItems. Should be under the "recommended" SectionHeader.
//McSpicy would appear both under "Recommended" and "Main Course". FoodItem can have more than one category.
export default function Content() {
  return (
    <ContentStyle>
      {Categories.map((sectionHeader) => {
        let foodItemToRender: FoodItem[] = [];
        AllFoodItems.forEach((foodItem) => {
          foodItem.categories.forEach((foodItemCategory) => {
            if (sectionHeader.name === foodItemCategory.name) {
              foodItemToRender.push(foodItem);
            }
          });
        });
        /*render Each Section. Recommended -> Appetiser -> ...
          return (
            <>
              <SectionHeader name={sectionHeader.name}/> //"recommended"
              <ItemCards cards={foodItemToRender}/>      // 6x McSpicy Cards
            </>
          )
        */
        return null;
      })}
    </ContentStyle>
  );
}
