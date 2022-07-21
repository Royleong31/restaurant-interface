import React from "react";
import { FoodItem } from "../../../../../../DummyData";
import { ItemCardStyle } from "./ItemCardStyle";

type Props = {
  item: FoodItem;
};

export default function ItemCard({ item }: Props) {
  return (
    <ItemCardStyle>
      <img src={item.img} alt={item.description} />
      <h5>{item.name}</h5>
      <h5>{item.basePrice}</h5>
      {/*BUG: number 8.60 converted to 8.6 Should use string instead.*/}
    </ItemCardStyle>
  );
}
