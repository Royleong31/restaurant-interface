import React from "react";
import { ContentStyle } from "./ContentStyle";
import { McSpicy, FoodItem, Categories } from "DummyData";
import SectionHeader from "./Section/SectionHeader/SectionHeader";
import ItemList from "./Section/ItemList/ItemList";

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
        const foodItemToRender: FoodItem[] = [];
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
        Will render each section per iteration.
        After mapping through Categories, all sections will be rendered.*/
        return null;
      })}
      <SectionHeader name={Categories[0].name} />
      <ItemList items={AllFoodItems} />
    </ContentStyle>
  );
}
