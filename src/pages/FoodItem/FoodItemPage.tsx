import React, { useState } from "react";
import _ from "lodash";
import { useParams, Link } from "react-router-dom";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import mockDatabase from "../../dummyData/mockDatabase";
import { HeaderStyle } from "./Header.style";
import { FormStyle } from "./Form.style";
import { CloseIcon } from "../../assets/svgs/index";
import Summary from "./Summary/Summary";
import Option from "./Option/Option";
import SubmitSection from "./SubmitSection/SubmitSection";
import { FooterStyle } from "./Footer.style";
import QuantityInput from "./QuantityInput/QuantityInput";
import NotFound from "pages/404";

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
  //gets the foodItemName from the URL
  const { foodItemName } = useParams();

  //get foodItem from database
  const foodItem = mockDatabase.find(
    (item) => _.kebabCase(item.name) === foodItemName
  ) ?? {
    name: "",
    description: "",
    categories: [],
    basePrice: 0,
    img: "",
    options: [],
  };

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

  //create priceState
  const [priceNonReducerState, setPriceState] = useState<{
    optionPrices: number[];
    totalPrice: number;
    basePrice: number;
  }>(initialPriceState);

  //create quantityState
  const [quantity, setQuantity] = useState(1);

  //Get react-hook-form methods
  const methods = useForm<FormData>({
    defaultValues: initialFormState,
  });

  //Check if foodItem === undefined, return <NotFound/>
  if (foodItem.name === "") return <NotFound />;

  //set finalPrice of FormState
  // methods.setValue("finalPrice", priceNonReducerState.totalPrice * quantity); //not necessary?

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
                  setPrice={setPriceState}
                />
              );
            })}
          </div>
          <FooterStyle>
            {/* <QuantityInput quantity={quantity} onClick={setQuantity} /> */}
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            <SubmitSection
              totalPrice={priceNonReducerState.totalPrice * quantity}
              isValid={methods.formState.isValid}
            />
          </FooterStyle>
        </FormStyle>
      </FormProvider>
    </>
  );
}
