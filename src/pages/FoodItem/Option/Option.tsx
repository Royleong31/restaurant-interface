import React from "react";
import { Option as OptionType } from "../../../DummyData/DataTypes";

type Props = {
  option: OptionType;
};

export default function Option({ option }: Props) {
  return <div>{JSON.stringify(option)}</div>;
}
