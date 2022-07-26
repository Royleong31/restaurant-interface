import React from "react";
import { FoodItem } from "../../../../../../DummyData/DataTypes";
import { ItemCardStyle } from "./ItemCard.style";
import numToPrice from "../../../../../../utils/numToPrice";

type Props = {
  item: FoodItem;
};

export default function ItemCard({ item }: Props) {
  return (
    <ItemCardStyle>
      <img src={`./img/${item.img}`} alt={item.description} />
      <div>
        <h5>{item.name}</h5>
        <h5>{numToPrice(item.basePrice)}</h5>
      </div>
    </ItemCardStyle>
  );
}
