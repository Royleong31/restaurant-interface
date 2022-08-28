import React, { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Option as OptionType } from "dummyData/dataTypes";
import { LabelStyle } from "./Label.style";
import numToPrice from "../../../utils/numToPrice";
import { SubOptionContent } from "./SubOptionContent.style";

type Props = {
  option: OptionType;
  optionIndex: number;
  errorMessage: string;
  setIsTouched: (value: React.SetStateAction<boolean>) => void;
  setPrice: React.Dispatch<
    React.SetStateAction<{
      optionPrices: number[];
      totalPrice: number;
      basePrice: number;
    }>
  >;
};

const radioValidator = (value: string): boolean => {
  if (value === null || value === undefined) return false;
  return value.length > 0;
};

export default function SubOptionsRadio({
  option,
  errorMessage,
  optionIndex,
  setIsTouched,
  setPrice,
}: Props) {
  //set up react-form-hook
  const { control, trigger } = useFormContext();
  const { field } = useController({
    name: `options.${optionIndex}.subOptions`,
    control: control,
    rules: {
      validate: {
        validator: (value) => radioValidator(value) || errorMessage,
      },
    },
  });

  //Since radio, optionPrice === subOptionPrice. Only one string, not string[].
  const [selectedRadio, setSelectedRadio] = useState<string>(""); //set up controlled input

  //update priceState on localState change
  useEffect(() => {
    //get new Option Price
    const newOptionPrice =
      option.subOptions.find((subOption) => subOption.name === selectedRadio)
        ?.price ?? 0;

    setPrice((prevPriceState) => {
      //get copy of optionPrices
      const optionPricesCopy = prevPriceState.optionPrices.slice();

      //update copy at index with newOptionPrice
      optionPricesCopy[optionIndex] = newOptionPrice;

      //calculate newTotalPrice
      const newTotalPrice = optionPricesCopy.reduce(
        (prevVal, currentVal) => prevVal + currentVal,
        prevPriceState.basePrice
      );

      //update and return new priceState
      return {
        optionPrices: optionPricesCopy,
        totalPrice: newTotalPrice,
        basePrice: prevPriceState.basePrice,
      };
    });
  }, [option.subOptions, optionIndex, selectedRadio, setPrice]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadio(e.target.value); //update localState
    field.onChange([`${e.target.value}`]); //update formState

    setIsTouched(true); //update touchState
    trigger(`options.${optionIndex}.subOptions`); //trigger validation
  };

  return (
    <>
      {option.subOptions.map((subOption, subOptionIndex) => (
        <LabelStyle key={subOptionIndex}>
          <SubOptionContent>
            <input
              key={subOptionIndex}
              checked={selectedRadio === subOption.name}
              type={"radio"}
              value={subOption.name}
              name={`options.${optionIndex}.subOptions`}
              onChange={(e) => changeHandler(e)}
            />
            <p>{subOption.name}</p>
          </SubOptionContent>
          <span>{numToPrice(subOption.price)}</span>
        </LabelStyle>
      ))}
    </>
  );
}
