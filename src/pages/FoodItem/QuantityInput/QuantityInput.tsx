import React from "react";
import { PlusButton, MinusButton } from "../../../assets/svgs";
import { QuantityInputStyle } from "./QuantityInput.style";

type Props = {
  quantity: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuantityInput({ quantity, onClick }: Props) {
  const clickHandler = (action: string): void => {
    switch (action) {
      case "increment":
        onClick(quantity + 1);
        return;
      case "decrement":
        if (quantity > 1) onClick(quantity - 1);
        return;
      default:
        return;
    }
  };

  return (
    <QuantityInputStyle>
      <div>
        <MinusButton onClick={() => clickHandler("decrement")} />
        <span>{quantity}</span>
        <PlusButton onClick={() => clickHandler("increment")} />
      </div>
    </QuantityInputStyle>
  );
}
