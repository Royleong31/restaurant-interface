import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
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
  const methods = useForm<FormData>({
    defaultValues: {
      options: foodItem.options.map((option) => {
        return { name: option.name as string, subOptions: [] };
      }),
      finalPrice: foodItem.basePrice,
    },
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted\n");
    console.log(data);
  };
  console.log(methods.watch("options"));
  // console.log(methods.formState.errors.options);

  const OptionsFC: JSX.Element[] = foodItem.options.map(
    (option, optionIndex) => {
      return (
        <Option option={option} key={optionIndex} optionIndex={optionIndex} />
      );
    }
  );

  return (
    <>
      <HeaderStyle>
        <CloseIcon />
        <img src={`./img/${foodItem.img}`} alt={foodItem.description} />
      </HeaderStyle>

      <FormProvider {...methods}>
        <FormStyle onSubmit={methods.handleSubmit(onSubmit)}>
          <Summary foodItem={foodItem} />
          {OptionsFC}
          <input type="submit" value="Add To Basket" />
        </FormStyle>
      </FormProvider>
    </>
  );
}
