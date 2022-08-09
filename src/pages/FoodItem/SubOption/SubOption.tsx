import React from "react";
import { useFormContext } from "react-hook-form";
import { SubOption as SubOptionType } from "dummyData/dataTypes";
import { LabelStyle } from "./Label.style";
import numToPrice from "../../../utils/numToPrice";


type Props = {
  subOption: SubOptionType;
  inputType: string;
  optionIndex: number;
  validator: (inputType: string, value: any) => boolean;
};

export default function SubOption({
  subOption,
  inputType,
  optionIndex,
  validator,
}: Props) {
  const { register } = useFormContext();

  return (
    <LabelStyle>
      <div>
        <input
          type={inputType}
          value={subOption.name}
          {...register(`options.${optionIndex}.subOptions`, {
            validate: {
              validator: (value) => validator(inputType, value),
            },
          })}
        />
        <p>{subOption.name}</p>
      </div>
      <span>{numToPrice(subOption.price)}</span>
    </LabelStyle>
  );
}
