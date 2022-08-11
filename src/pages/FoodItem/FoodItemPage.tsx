import React, { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import { useParams, Link } from "react-router-dom";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import mockDatabase from "../../dummyData/mockDatabase";
import { FoodItem } from "dummyData/dataTypes";
import { HeaderStyle } from "./Header.style";
import { FormStyle } from "./Form.style";
import { CloseIcon } from "../../assets/svgs/index";
import NotFound from "../404/index";
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

const priceReducer = (
  state: {
    optionPrices: number[];
    totalPrice: number;
    basePrice: number;
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
    state.basePrice
  );
  return newState;
};

export default function FoodItemPage() {
  //gets the foodItemName from the URL
  const { foodItemName } = useParams();

  //get foodItem from database
  const foodItem = mockDatabase.find(
    (item) => _.kebabCase(item.name) === foodItemName
  ) as FoodItem;
  // if(foodItem === undefined) return <NotFound/>
  //this doesn't work. Can't call hooks conditionally. What if my mockDatabase.find() fails?
  document.title = foodItem.name;

  const initialPriceState = {
    optionPrices: foodItem.options.map(() => 0),
    totalPrice: foodItem.basePrice,
    basePrice: foodItem.basePrice,
  };

  const initialFormState = {
    name: foodItem.name,
    options: foodItem.options.map((option) => {
      return { name: option.name, subOptions: [] as string[] };
    }),
    quantity: 1,
    finalPrice: foodItem.basePrice,
  };

  //Create price state. Updates on every input change in subOptions.
  const [priceState, dispatchPrice] = useReducer(
    priceReducer,
    initialPriceState
  );
  const [quantity, setQuantity] = useState(1);

  //Get react-hook-form methods
  const methods = useForm<FormData>({
    defaultValues: initialFormState,
  });

  //set finalPrice of FormState
  methods.setValue("finalPrice", priceState.totalPrice * quantity);

  //Submit form
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted\n");
    console.log(data);
  };
  console.log(methods.watch("options"));

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
          <div>
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
