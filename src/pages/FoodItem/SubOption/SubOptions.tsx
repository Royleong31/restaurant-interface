import React, { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Option as OptionType } from "dummyData/dataTypes";
import { LabelStyle } from "./Label.style";
import numToPrice from "../../../utils/numToPrice";

type Props = {
  option: OptionType;
  optionIndex: number;
  errorMessage: string;
  inputType: "radio" | "checkbox";
};

const validator = (
  value: any,
  inputType: "radio" | "checkbox",
  min: number,
  max: number
): boolean => {
  // console.log(value);
  if (value === null || value === undefined) return false;

  let valid = false;
  if (inputType === "radio") {
    valid = value.length > 0;
  } else if (inputType === "checkbox") {
    valid = value.length >= min && value.length <= max;
  }
  return valid;
};

export default function SubOptions({
  option,
  optionIndex,
  errorMessage,
  inputType,
}: Props) {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name: `options.${optionIndex}.subOptions`,
    control: control,
    rules: {
      validate: {
        validator: (value) =>
          validator(
            value,
            inputType,
            option.restriction.min,
            option.restriction.max
          ) || errorMessage,
      },
    },
  });
  const [subOptionFormValues, setSubOptionFormValues] = useState<string[]>([]);
  console.log(fieldState.error);

  return (
    <>
      {option.subOptions.map((subOption, subOptionIndex) => (
        <LabelStyle key={subOptionIndex}>
          <div>
            <input
              key={subOptionIndex}
              checked={subOptionFormValues.includes(subOption.name)}
              type={inputType}
              value={subOption.name}
              name={`options.${optionIndex}.subOptions`}
              onChange={(e) => {
                let subOptionFormValuesCopy: string[] =
                  structuredClone(subOptionFormValues); // using destructuring is buggy {...subOptionFormValues}

                if (e.target.checked && inputType === "radio") {
                  // console.log("Radio checked");
                  field.onChange([`${e.target.value}`]);
                  setSubOptionFormValues([`${e.target.value}`]);
                } else if (e.target.checked && inputType === "checkbox") {
                  // console.log("Checkbox checked");
                  subOptionFormValuesCopy.push(e.target.value);
                  field.onChange(subOptionFormValuesCopy);
                  setSubOptionFormValues(subOptionFormValuesCopy);
                } else if (!e.target.checked) {
                  // console.log("Checkbox unchecked");
                  subOptionFormValuesCopy = subOptionFormValuesCopy.filter(
                    (subOptionValue) => subOptionValue !== e.target.value
                  );
                  field.onChange(subOptionFormValuesCopy);
                  setSubOptionFormValues(subOptionFormValuesCopy);
                }
              }}
            />
            <p>{subOption.name}</p>
          </div>
          <span>{numToPrice(subOption.price)}</span>
        </LabelStyle>
      ))}
    </>
  );
}
