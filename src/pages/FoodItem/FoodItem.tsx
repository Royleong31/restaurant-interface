import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

export default function FoodItem({}: Props) {
  const { foodItemName } = useParams(); //gets the foodItemName from the URL
  return <div>{foodItemName}</div>;
}
