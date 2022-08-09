import React, { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import { useParams, Link } from "react-router-dom";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import mockDatabase from "../../dummyData/mockDatabase";
import { FoodItem } from "dummyData/dataTypes";
import { HeaderStyle } from "./Header.style";
import { FormStyle } from "./Form.style";
import { CloseIcon } from "../../assets/svgs/index";
import Summary from "./Summary/Summary";
import Option from "./Option/Option";
import SubmitSection from "./SubmitSection/SubmitSection";
import { FooterStyle } from "./Footer.style";
import QuantityInput from "./QuantityInput/QuantityInput";

//Create form data for this foodItem
type FormData = {
  name: string;
  options: {
    name: string;
    subOptions: string[];
  }[];
  quantity: number;
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

  //Create price state. Updates on every input change.
  const initialPrices = {
    optionPrices: foodItem.options.map((option) => 0),
    totalPrice: foodItem.basePrice,
  };
  const priceReducer = (
    state: {
      optionPrices: number[];
      totalPrice: number;
    },
    action: {
      index: number;
      amount: number;
    }
  ) => {
    const newState = { ...state };
    newState.optionPrices[action.index] = action.amount;
    newState.totalPrice = newState.optionPrices.reduce(
      (prev, optionPrice) => prev + optionPrice,
      foodItem.basePrice
    );
    return newState;
  };
  const [priceState, dispatchPrice] = useReducer(priceReducer, initialPrices);
  const [quantity, setQuantity] = useState(1);

  //Get react-hook-form methods
  const methods = useForm<FormData>({
    defaultValues: {
      name: foodItem.name,
      options: foodItem.options.map((option) => {
        return { name: option.name as string | "", subOptions: [] };
      }),
      quantity: 1,
      finalPrice: foodItem.basePrice,
    },
  });

  methods.setValue("finalPrice", priceState.totalPrice * quantity);

  console.log(methods.watch("options"));
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted\n");
    console.log(data);
  };

  return (
    <>
      <HeaderStyle>
        <Link to={"/"}>
          <CloseIcon />
        </Link>
        <img src={`./img/${foodItem.img}`} alt={foodItem.description} />
      </HeaderStyle>

      <FormProvider {...methods}>
        <FormStyle onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="inputs">
            <Summary
              foodItem={foodItem}
              showBorderBottom={foodItem.options.length !== 0}
            />
            {foodItem.options.map((option, optionIndex) => {
              return (
                <Option
                  option={option}
                  key={optionIndex}
                  optionIndex={optionIndex}
                  dispatchPrice={dispatchPrice}
                />
              );
            })}
          </div>
          <FooterStyle>
            {/* <QuantityInput quantity={quantity} onClick={setQuantity} /> */}
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            <SubmitSection
              totalPrice={priceState.totalPrice * quantity}
              isValid={methods.formState.isValid}
            />
          </FooterStyle>
        </FormStyle>
      </FormProvider>
    </>
  );
}
