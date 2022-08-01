import React from "react";
import { FoodItem } from "../../../../../DummyData/DataTypes";
import { LinkStyled } from "./Link.style";
import numToPrice from "../../../../../utils/numToPrice";
import _ from "lodash";

type Props = {
  item: FoodItem;
};

export default function ItemCard({ item }: Props) {
  /* This is a react-router-dom Link element */
  return (
    <LinkStyled to={`/${_.kebabCase(item.name)}`}>
      <img src={`./img/${item.img}`} alt={item.description} />
      <div>
        <h5>{item.name}</h5>
        <h5>{numToPrice(item.basePrice)}</h5>
      </div>
    </LinkStyled>
  );
}
