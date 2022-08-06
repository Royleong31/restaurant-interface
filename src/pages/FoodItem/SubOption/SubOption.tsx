import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { SubOption as SubOptionType } from "DummyData/DataTypes";
import { LabelStyle } from "./Label.style";
import { triggerAsyncId } from "async_hooks";

type Props = {
  subOption: SubOptionType;
  inputType: string;
  optionIndex: number;
  validator: (inputType: string, value: any) => boolean;
  touchHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SubOption({
  subOption,
  inputType,
  optionIndex,
  validator,
  touchHandler,
}: Props) {
  const { register, trigger } = useFormContext();
  return (
    <LabelStyle>
      <input
        type={inputType}
        value={subOption.name}
        {...register(`options.${optionIndex}.subOptions`, {
          validate: {
            validator: (value) => validator(inputType, value),
          },
        })}
      />
      {subOption.name}
    </LabelStyle>
  );
}
