import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import { useFormContext } from "react-hook-form";
import { Option as OptionType } from "../../../dummyData/dataTypes";
import { OptionHeaderStyle } from "./OptionHeader.style";
import { OptionStyle } from "./Option.style";
import { ValidIcon, InvalidIcon } from "assets/svgs";
import SubOption from "../SubOption/SubOption";

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
    inputType: string;
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
      errorMessage: `Pick up to ${max} options`,
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

  const validator = (inputType: string, value: any): boolean => {
    // console.log(`Validate ${option.name}.\nValue:`);
    // console.log(value);
    if (value === null || value === undefined || inputType === "") return false;

    let valid = false;
    if (inputType === "radio") {
      valid = value.length > 0;
    } else if (inputType === "checkbox") {
      valid =
        value.length >= option.restriction.min &&
        value.length <= option.restriction.max;
    }

    return valid;
  };
  const subOptionArray: JSX.Element[] = option.subOptions.map(
    (subOption, subOptionIndex) => {
      return (
        <SubOption
          key={subOptionIndex}
          subOption={subOption}
          inputType={inputOptions.inputType}
          optionIndex={optionIndex}
          validator={validator}
        />
      );
    }
  );

  const renderInvalidIcon =
    errors.options !== undefined && errors.options[optionIndex] !== undefined;

  const renderValidIcon =
    isTouched &&
    (errors.options === undefined || errors.options[optionIndex] === undefined);
  // console.log(
  //   option.name +
  //     "\nRenderValid: " +
  //     renderValidIcon +
  //     "\nRenderInvalid: " +
  //     renderInvalidIcon
  // );

  const AnimatedValidIcon = animated(ValidIcon);
  const AnimatedInvalidIcon = animated(InvalidIcon);
  const transitionOptions = {
    from: { transform: "translateY(0.3rem)", opacity: 0 },
    enter: { transform: "translateY(0)", opacity: 1 },
    leave: { transform: "translateY(0rem)", opacity: 0 },
    config: {
      mass: 0.1,
      tension: 52,
      friction: 2,
      velocity: 0.016,
    },
  };

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
      <div onChange={(e) => touchHandler()}>{subOptionArray}</div>
    </OptionStyle>
  );
}
