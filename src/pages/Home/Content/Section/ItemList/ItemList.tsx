import React from "react";
import { FoodItem } from "../../../../../DummyData/DataTypes";
import { ItemListStyle } from "./ItemListStyle";
import ItemCard from "./ItemCard/ItemCard";

type Props = {
  items: FoodItem[];
};

export default function ItemList({ items }: Props) {
  return (
    <ItemListStyle>
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}
    </ItemListStyle>
  );
}
