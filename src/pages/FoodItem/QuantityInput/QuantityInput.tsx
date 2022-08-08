import React, { useState } from "react";
import {
  PlusButton,
  MinusButton,
  PlusIcon,
  MinusIcon,
} from "../../../assets/svgs";
import { QuantityInputStyle, animateOptions } from "./QuantityInput.style";
import { animated, useSpring } from "react-spring";
import { OperatorDiv } from "./OperatorDiv.style";

type Props = {
  quantity: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
};

export default React.memo(function QuantityInput({ quantity, onClick }: Props) {
  const [disableDecrement, setDisableDecrement] = useState(false);

  const clickHandler = (action: "increment" | "decrement"): void => {
    switch (action) {
      case "increment":
        if (quantity === 1) setDisableDecrement(false);
        onClick(quantity + 1);
        return;

      case "decrement":
        if (quantity === 2) {
          setDisableDecrement(true);
          onClick(quantity - 1);
          return;
        } else if (quantity > 2) onClick(quantity - 1);
        return;

      default:
        return;
    }
  };

  const animateProps = useSpring(animateOptions);

  return (
    <>
      <QuantityInputStyle>
        <OperatorDiv
          $disabled={disableDecrement}
          onClick={() => clickHandler("decrement")}
        >
          <MinusIcon />
        </OperatorDiv>
        <animated.span style={animateProps}>{quantity}</animated.span>
        <OperatorDiv
          $disabled={false}
          onClick={() => clickHandler("increment")}
        >
          <PlusIcon />
        </OperatorDiv>
      </QuantityInputStyle>
    </>
  );
});
