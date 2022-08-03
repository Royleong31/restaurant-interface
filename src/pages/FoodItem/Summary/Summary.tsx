import { FoodItem } from "DummyData/DataTypes";
import React from "react";
import { SummaryStyle } from "./Summary.style";
import { SummaryHeaderStyle } from "./SummaryHeader.style";
import numToPrice from "../../../utils/numToPrice";
import { DescriptionStyle } from "./Description.style";

type Props = {
  foodItem: FoodItem;
};

export default function Summary({ foodItem }: Props) {
  return (
    <SummaryStyle>
      <SummaryHeaderStyle>
        <h1>{foodItem.name}</h1>
        <div>
          <h2>{numToPrice(foodItem.basePrice)}</h2>
          <p>Base price</p>
        </div>
      </SummaryHeaderStyle>
      <DescriptionStyle>{foodItem.description}</DescriptionStyle>
    </SummaryStyle>
  );
}
