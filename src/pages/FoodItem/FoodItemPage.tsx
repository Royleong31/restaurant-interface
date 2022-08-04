import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import mockDatabase from "../../DummyData/mockDatabase";
import { FoodItem } from "DummyData/DataTypes";
import { HeaderStyle } from "./Header.style";
import { FormStyle } from "./Form.style";
import { CloseIcon } from "../../assets/svgs/index";
import Summary from "./Summary/Summary";
import Option from "./Option/Option";

//Create form data for this foodItem
type FormData = {
  options: {
    name: string;
    subOptions: string[];
  }[];
  finalPrice: number;
};

export default function FoodItemPage() {
  //Get FoodItem Object
  const { foodItemName } = useParams(); //gets the foodItemName from the URL
  const foodItem = mockDatabase.find(
    (item) => _.kebabCase(item.name) === foodItemName
  ) as FoodItem;
  useEffect(() => {
    document.title = foodItem ? foodItem.name : "Not Found";
  });

  //Get react-hook-form props
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((formData) => console.log(formData));

  const OptionsFC: JSX.Element[] = foodItem.options.map((option, index) => {
    return <Option option={option} key={index} />;
  });

  return (
    <>
      <HeaderStyle>
        <CloseIcon />
        <img src={`./img/${foodItem.img}`} alt={foodItem.description} />
      </HeaderStyle>

      <FormStyle onSubmit={onSubmit}>
        <Summary foodItem={foodItem} />
        {OptionsFC}
        <input {...register("options.0.subOptions.0")} />
        <input type="submit" />
      </FormStyle>
    </>
  );
}
