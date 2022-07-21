import React from "react";
import { FoodItem } from "../../../../../DummyData";
import { ItemListStyle } from "./ItemListStyle";
import ItemCard from "./ItemCard/ItemCard";

type Props = {
  items: FoodItem[];
};

export default function ItemList({ items }: Props) {
  return (
    <ItemListStyle>
      {
        items.map((item) => {
          return <ItemCard item={item} />;
        })
        //Iterates through all of the foodItemToRender, and pass each item as prop to ItemCard.
      }
    </ItemListStyle>
  );
}
