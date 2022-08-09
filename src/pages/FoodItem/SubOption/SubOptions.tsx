import React, { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Option as OptionType } from "dummyData/dataTypes";
import { LabelStyle } from "./Label.style";
import numToPrice from "../../../utils/numToPrice";

type Props = {
  option: OptionType;
  optionIndex: number;
  inputOptions: {
    helperText: string;
    errorMessage: string;
    inputType: "radio" | "checkbox";
  };
  setIsTouched: (value: React.SetStateAction<boolean>) => void;
  dispatchPrice: React.Dispatch<{
    index: number;
    amount: number;
  }>;
};

const validator = (
  value: string | string[],
  inputType: "radio" | "checkbox",
  min: number,
  max: number
): boolean => {
  // console.log(value);
  if (value === null || value === undefined) return false;
  if (inputType === "radio") {
    //value will be string
    return value.length > 0;
  } else if (inputType === "checkbox") {
    //value will be string[]
    return value.length >= min && value.length <= max;
  }
  return false;
};

export default function SubOptions({
  option,
  inputOptions,
  optionIndex,
  setIsTouched,
  dispatchPrice,
}: Props) {
  const { control, trigger } = useFormContext();
  const { field } = useController({
    name: `options.${optionIndex}.subOptions`,
    control: control,
    rules: {
      validate: {
        validator: (value) =>
          validator(
            value,
            inputOptions.inputType,
            option.restriction.min,
            option.restriction.max
          ) || inputOptions.errorMessage,
      },
    },
  });
  const [subOptionFormValues, setSubOptionFormValues] = useState<string[]>([]); //set up controlled input

  useEffect(() => {
    let optionPrice = 0;
    subOptionFormValues.forEach((subOptionName) => {
      optionPrice +=
        option.subOptions.find((subOption) => subOption.name === subOptionName)
          ?.price ?? 0;
    });
    dispatchPrice({ index: optionIndex, amount: optionPrice });
  }, [dispatchPrice, option.subOptions, optionIndex, subOptionFormValues]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let subOptionFormValuesCopy: string[] =
      structuredClone(subOptionFormValues); // using destructuring is buggy {...subOptionFormValues}

    if (e.target.checked && inputOptions.inputType === "radio") {
      field.onChange([`${e.target.value}`]);
      setSubOptionFormValues([e.target.value]);
    } else if (e.target.checked && inputOptions.inputType === "checkbox") {
      subOptionFormValuesCopy.push(e.target.value);
      field.onChange(subOptionFormValuesCopy);
      setSubOptionFormValues(subOptionFormValuesCopy);
    } else if (!e.target.checked) {
      subOptionFormValuesCopy = subOptionFormValuesCopy.filter(
        (subOptionValue) => subOptionValue !== e.target.value
      );
      field.onChange(subOptionFormValuesCopy);
      setSubOptionFormValues(subOptionFormValuesCopy);
    }

    //touch handler
    setIsTouched(true);
    trigger(`options.${optionIndex}.subOptions`);
  };

  return (
    <>
      {option.subOptions.map((subOption, subOptionIndex) => (
        <LabelStyle key={subOptionIndex}>
          <div>
            <input
              key={subOptionIndex}
              checked={subOptionFormValues.includes(subOption.name)}
              type={inputOptions.inputType}
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
