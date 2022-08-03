import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useParams } from "react-router-dom";
import MockDatabase from "../../DummyData/MockDatabase";
import NotFound from "../404/index";
import { HeaderStyle } from "./Header.style";
import { CloseIcon } from "../../assets/svgs/index";
import { MainStyle } from "./Main.style";
import Summary from "./Summary/Summary";
import Option from "./Option/Option";

export default function FoodItem() {
  const { foodItemName } = useParams(); //gets the foodItemName from the URL
  const foodItem = MockDatabase.find(
    (item) => _.kebabCase(item.name) === foodItemName
  );
  useEffect(() => {
    document.title = foodItem ? foodItem.name : "Not Found";
  });
  if (foodItem === undefined) return <NotFound />; //FoodItem not found in database

  const OptionsFC: JSX.Element[] = foodItem.options.map((option, index) => {
    return <Option option={option} key={index} />;
  });

  return (
    <>
      <HeaderStyle>
        <CloseIcon />
        <img src={`./img/${foodItem.img}`} alt={foodItem.description} />
      </HeaderStyle>

      <MainStyle>
        <Summary foodItem={foodItem} />
        {OptionsFC}
      </MainStyle>
    </>
  );
}
