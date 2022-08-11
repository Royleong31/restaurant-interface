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

const checkboxValidator = (
  value: string[],
  min: number,
  max: number
): boolean => {
  if (value === null || value === undefined) return false;
  return value.length >= min && value.length <= max;
};

export default function SubOptionsCheckbox({
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
        validator: (value) =>
          checkboxValidator(
            value,
            option.restriction.min,
            option.restriction.max
          ) || errorMessage,
      },
    },
  });
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]); //set up controlled input

  //update price on selectedCheckboxes change
  useEffect(() => {
    let optionPrice = 0;
    selectedCheckboxes.forEach((subOptionName) => {
      optionPrice +=
        option.subOptions.find((subOption) => subOption.name === subOptionName)
          ?.price ?? 0;
    });

    dispatchPrice({ index: optionIndex, amount: optionPrice });
  }, [dispatchPrice, option.subOptions, optionIndex, selectedCheckboxes]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //get copy of previousState
    let selectedCheckboxesCopy: string[] = structuredClone(selectedCheckboxes);

    if (e.target.checked) {
      //if checked, add to array, then update states.

      selectedCheckboxesCopy.push(e.target.value);
      field.onChange(selectedCheckboxesCopy);
      setSelectedCheckboxes(selectedCheckboxesCopy);
    } else {
      //if unChecked, remove from array, then update states.

      selectedCheckboxesCopy = selectedCheckboxesCopy.filter(
        (subOptionValue) => subOptionValue !== e.target.value
      );
      field.onChange(selectedCheckboxesCopy);
      setSelectedCheckboxes(selectedCheckboxesCopy);
    }

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
              checked={selectedCheckboxes.includes(subOption.name)}
              type={"checkbox"}
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
