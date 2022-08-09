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
    trigger,
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
      errorMessage:
        max === 1 ? "Pick up to 1 option" : `Pick up to ${max} options`,
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
      errorMessage: `Pick ${min} options`,
      inputType: "checkbox",
    };
  } else {
    inputOptions = {
      helperText: `Pick ${min}, max ${max}`,
      errorMessage: `Pick between ${min} and ${max} options`,
      inputType: "checkbox",
    };
  }

  const touchHandler = (): void => {
    // console.log("Touched");
    setIsTouched(true);
    trigger(`options.${optionIndex}.subOptions`);
  };

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
      <div onChange={(e) => touchHandler()}>
        <SubOptions
          option={option}
          optionIndex={optionIndex}
          errorMessage={inputOptions.errorMessage}
          inputType={inputOptions.inputType}
        />
      </div>
    </OptionStyle>
  );
}
