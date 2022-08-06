import React from "react";
import { PlusButton, MinusButton } from "../../../assets/svgs";
import { QuantityInputStyle } from "./QuantityInput.style";

type Props = {};

export default function QuantityInput({}: Props) {
  return (
    <QuantityInputStyle>
      <div>
        <MinusButton />
        <span>1</span>
        <PlusButton />
      </div>
    </QuantityInputStyle>
  );
}
