import React, { useState } from "react";
import { useTransition } from "react-spring";
import { useFormContext } from "react-hook-form";
import { Option as OptionType } from "../../../dummyData/dataTypes";
import { OptionHeaderStyle } from "./OptionHeader.style";
import SubOptionsRadio from "../SubOption/SubOptions.radio";
import SubOptionsCheckbox from "../SubOption/SubOptions.checkbox";
import {
  OptionStyle,
  AnimatedInvalidIcon,
  AnimatedValidIcon,
  transitionOptions,
} from "./Option.style";

type Props = {
  option: OptionType;
  optionIndex: number;
  setPrice: React.Dispatch<
    React.SetStateAction<{
      optionPrices: number[];
      totalPrice: number;
      basePrice: number;
    }>
  >;
};

export default function Option({ option, optionIndex, setPrice }: Props) {
  const [isTouched, setIsTouched] = useState(false);
  const {
    formState: { errors },
  } = useFormContext();

  //determine helper text value
  let inputOptions: {
    helperText: string;
    errorMessage: string;
    inputType: "radio" | "checkbox";
  };
  const min = option.restriction.min,
    max = option.restriction.max;

  if (min === 0 && max === option.subOptions.length) {
    inputOptions = {
      helperText: `Optional, max ${max}`,
      errorMessage: "",
      inputType: "checkbox",
    };
  } else if (min === 0 && max >= 1) {
    inputOptions = {
      helperText: `Optional, max ${max}`,
      errorMessage: `Pick up to ${max} option${max === 1 ? "" : "s"}`,
      inputType: "checkbox",
    };
  } else if (min === 1 && max === 1) {
    inputOptions = {
      helperText: `Pick 1`,
      errorMessage: `Pick 1 option`,
      inputType: "radio",
    };
  } else if (min === max) {
    inputOptions = {
      helperText: `Pick ${min}`,
      errorMessage: `Pick ${min} option${min === 1 ? "" : "s"}`,
      inputType: "checkbox",
    };
  } else {
    inputOptions = {
      helperText: `Pick ${min}, max ${max}`,
      errorMessage: `Pick between ${min} and ${max} options`,
      inputType: "checkbox",
    };
  }

  const renderInvalidIcon =
    errors.options !== undefined && errors.options[optionIndex] !== undefined;

  const renderValidIcon =
    isTouched &&
    (errors.options === undefined || errors.options[optionIndex] === undefined);

  const validIconTransition = useTransition(renderValidIcon, transitionOptions);
  const invalidIconTransition = useTransition(
    renderInvalidIcon,
    transitionOptions
  );

  return (
    <OptionStyle className="options">
      <OptionHeaderStyle>
        <h1>{option.name}</h1>
        <p>{inputOptions.helperText}</p>
      </OptionHeaderStyle>
      {invalidIconTransition(
        (styles, renderInvalidIcon) =>
          renderInvalidIcon && <AnimatedInvalidIcon style={styles} />
      )}
      {validIconTransition(
        (styles, renderValidIcon) =>
          renderValidIcon && <AnimatedValidIcon style={styles} />
      )}

      {inputOptions.inputType === "radio" ? (
        <SubOptionsRadio
          option={option}
          optionIndex={optionIndex}
          errorMessage={inputOptions.errorMessage}
          setIsTouched={setIsTouched}
          setPrice={setPrice}
        />
      ) : inputOptions.inputType === "checkbox" ? (
        <SubOptionsCheckbox
          option={option}
          optionIndex={optionIndex}
          errorMessage={inputOptions.errorMessage}
          setIsTouched={setIsTouched}
          setPrice={setPrice}
        />
      ) : (
        <></>
      )}
    </OptionStyle>
  );
}
