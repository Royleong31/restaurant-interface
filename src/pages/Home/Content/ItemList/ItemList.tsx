import React from "react";
import { FoodItem } from "../../../../DummyData/DataTypes";
import { ItemListStyle } from "./ItemList.style";
import ItemCard from "./ItemCard/ItemCard";

type Props = {
  items: { foodItem: FoodItem; index: number }[];
};

export default function ItemList({ items }: Props) {
  return (
    <ItemListStyle className="FoodItemList">
      {items.map((item) => {
        return <ItemCard item={item.foodItem} key={item.index} />;
      })}
    </ItemListStyle>
  );
}
