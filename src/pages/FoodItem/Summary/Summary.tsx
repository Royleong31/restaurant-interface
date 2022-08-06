import { FoodItem } from "DummyData/DataTypes";
import React from "react";
import { SummaryStyle } from "./Summary.style";
import { SummaryHeaderStyle } from "./SummaryHeader.style";
import numToPrice from "../../../utils/numToPrice";
import { DescriptionStyle } from "./Description.style";

type Props = {
  foodItem: FoodItem;
  showBorderBottom: boolean;
};

export default React.memo(function Summary({
  foodItem,
  showBorderBottom,
}: Props) {
  return (
    <SummaryStyle $showBorderBottom={showBorderBottom}>
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
});
