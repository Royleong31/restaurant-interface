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
import QuantityInput from "./QuantityInput/QuantityInput";
import SubmitSection from "./SubmitSection/SubmitSection";

//Create form data for this foodItem
type FormData = {
  options: {
    name: string;
    subOptions: string[];
  }[];
  quantity: number;
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

  const [totalPrice, setTotalPrice] = useState(foodItem.basePrice);

  //Get react-hook-form methods
  const methods = useForm<FormData>({
    defaultValues: {
      options: foodItem.options.map((option) => {
        return { name: option.name as string | "", subOptions: [] };
      }),
      quantity: 1,
    },
  });

  //update value of Total Price whenever form changes.
  const currentFormValues = methods.getValues("options");
  const currentFormState = methods.getFieldState("options");
  useEffect(() => {
    let additionalCharge = 0;
    foodItem.options.forEach((option, optionIndex) => {
      const intersection = option.subOptions.filter((subOption) =>
        currentFormValues[optionIndex].subOptions.includes(subOption.name)
      );
      option.subOptions.forEach((subOption) => {
        if (intersection.includes(subOption))
          additionalCharge += subOption.price; //potential bug. Object comparison.
      });
    });
    setTotalPrice(foodItem.basePrice + additionalCharge);
  }, [foodItem, setTotalPrice, currentFormValues, currentFormState]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted\n");
    console.log(data);
  };

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
          <QuantityInput />
          <SubmitSection totalPrice={totalPrice} />
          {/* <p>{`Total price: ${totalPrice}`}</p> */}
          {/* <input type="submit" value="Add To Basket" /> */}
        </FormStyle>
      </FormProvider>
    </>
  );
}
