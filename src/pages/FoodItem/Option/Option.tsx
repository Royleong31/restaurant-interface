import React, { useState } from "react";
import { useTransition } from "react-spring";
import { useFormContext } from "react-hook-form";
import { Option as OptionType } from "../../../dummyData/dataTypes";
import { OptionHeaderStyle } from "./OptionHeader.style";
import {
  OptionStyle,
  AnimatedInvalidIcon,
  AnimatedValidIcon,
  transitionOptions,
} from "./Option.style";
import SubOptions from "../SubOption/SubOptions";

type Props = {
  option: OptionType;
  optionIndex: number;
};

export default function Option({ option, optionIndex }: Props) {
  const [isTouched, setIsTouched] = useState(false); //the builtIn isTouched doesn't work for checkboxes. Require both onBlur AND onFocus to be true.
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

      <SubOptions
        option={option}
        optionIndex={optionIndex}
        inputOptions={inputOptions}
        setIsTouched={setIsTouched}
      />
    </OptionStyle>
  );
}
