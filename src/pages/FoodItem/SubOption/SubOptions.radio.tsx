import React, { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Option as OptionType } from "dummyData/dataTypes";
import { LabelStyle } from "./Label.style";
import numToPrice from "../../../utils/numToPrice";

type Props = {
  option: OptionType;
  optionIndex: number;
  errorMessage: string;
  setIsTouched: (value: React.SetStateAction<boolean>) => void;
  dispatchPrice: React.Dispatch<{
    index: number;
    amount: number;
  }>;
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
  dispatchPrice,
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

  //update price on localState change
  useEffect(() => {
    const optionPrice =
      option.subOptions.find((subOption) => subOption.name === selectedRadio)
        ?.price ?? 0;

    dispatchPrice({ index: optionIndex, amount: optionPrice });
  }, [dispatchPrice, option.subOptions, optionIndex, selectedRadio]);

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
          <div>
            <input
              key={subOptionIndex}
              checked={selectedRadio === subOption.name}
              type={"radio"}
              value={subOption.name}
              name={`options.${optionIndex}.subOptions`}
              onChange={(e) => changeHandler(e)}
            />
            <p>{subOption.name}</p>
          </div>
          <span>{numToPrice(subOption.price)}</span>
        </LabelStyle>
      ))}
    </>
  );
}
