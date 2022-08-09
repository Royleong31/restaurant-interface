import React, { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { SubOption, SubOption as SubOptionType } from "dummyData/dataTypes";
import { LabelStyle } from "./Label.style";
import numToPrice from "../../../utils/numToPrice";

type Props = {
  subOptions: SubOption[];
  optionName: string;
  inputType: string;
  validator: (inputType: string, value: any) => boolean;
};

export default function SubOptions({
  subOptions,
  optionName,
  inputType,
  validator,
}: Props) {
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({
    name: optionName,
    control: control,
    rules: {
      validate: {
        validator: (value) => validator(inputType, value),
      },
    },
  });
  const [subOptionFormValues, setSubOptionFormValues] = useState<string[]>([]);

  return (
    <>
      {subOptions.map((subOption, subOptionIndex) => (
        <LabelStyle key={subOptionIndex}>
          <div>
            <input
              onChange={(e) => {
                let subOptionFormValuesCopy: string[] =
                  structuredClone(subOptionFormValues); // using destructuring is buggy {...subOptionFormValues}

                if (e.target.checked && inputType === "radio") {
                  console.log("Radio checked");
                  field.onChange([`${e.target.value}`]);
                  setSubOptionFormValues([`${e.target.value}`]);
                } else if (e.target.checked && inputType === "checkbox") {
                  console.log("Checkbox checked");
                  subOptionFormValuesCopy.push(e.target.value);
                  field.onChange(subOptionFormValuesCopy);
                  setSubOptionFormValues(subOptionFormValuesCopy);
                } else if (!e.target.checked) {
                  console.log("Checkbox unchecked");
                  subOptionFormValuesCopy = subOptionFormValuesCopy.filter(
                    (subOptionValue) => subOptionValue !== e.target.value
                  );
                  field.onChange(subOptionFormValuesCopy);
                  setSubOptionFormValues(subOptionFormValuesCopy);
                }
              }}
              key={subOptionIndex}
              checked={subOptionFormValues.includes(subOption.name)}
              type={`${inputType}`}
              value={subOption.name}
              name={optionName}
            />
            <p>{subOption.name}</p>
          </div>
          <span>{numToPrice(subOption.price)}</span>
        </LabelStyle>
      ))}
    </>
  );
}
