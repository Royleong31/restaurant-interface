import React from "react";
import _ from "lodash";
import { useParams } from "react-router-dom";
import Mockdatabase from '../../DummyData/MockDatabase';

type Props = {};

export default function FoodItem({}: Props) {
  const { foodItemName } = useParams(); //gets the foodItemName from the URL
  return <div>{foodItemName}</div>;
}
