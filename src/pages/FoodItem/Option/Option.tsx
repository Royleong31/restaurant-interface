import React from "react";
import { Option as OptionType } from "../../../DummyData/DataTypes";
import { OptionHeaderStyle } from "./OptionHeader.style";
import { ValidIcon } from "assets/svgs";

type Props = {
  option: OptionType;
};

export default function Option({ option }: Props) {
  //determine helper text value, see Notion for explanation.
  const { helperText, checkBox } = ((
    min: number = option.restriction.min,
    max: number = option.restriction.max
  ): { helperText: string; checkBox: boolean } => {
    if (min === 0 && max === 1)
      return { helperText: "Optional", checkBox: true };
    else if (min === 0 && max > 1)
      return { helperText: `Optional, max ${max}`, checkBox: true };
    else if (min === max) return { helperText: `Pick ${min}`, checkBox: false };
    else return { helperText: `Pick ${min}, max ${max}`, checkBox: false };
  })();

  const subOptionArray: JSX.Element[] = option.subOptions.map(
    (subOption, index) => {
      return <div key={index}>{subOption.name}</div>;
    }
  );
  return (
    <div>
      <OptionHeaderStyle>
        <h1>{option.name}</h1>
        <p>{helperText}</p> {/* Depends on the min and max requirements */}
        <ValidIcon /> {/* Rendered if no error */}
      </OptionHeaderStyle>
      {subOptionArray}
      {/* <p>{JSON.stringify(option)}</p> */}
    </div>
  );
}
