import React from "react";
import {
  PlusButton,
  MinusButton,
  PlusIcon,
  MinusIcon,
} from "../../../assets/svgs";
import { QuantityInputStyle } from "./QuantityInput.style";
import { animated, useSpring } from "react-spring";
import { OperatorDiv } from "./OperatorDiv.style";

type Props = {
  quantity: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
};

export default React.memo(function QuantityInput({ quantity, onClick }: Props) {
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

  const animateProps = useSpring({
    from: { transform: "translateY(-0.3rem)", opacity: 0.8 },
    to: { transform: "translateY(0)", opacity: 1 },
    reset: true,
    // delay: 200,
    config: {
      mass: 0.1,
      tension: 52,
      friction: 2,
      velocity: 0.016,
    },
  });

  return (
    <>
      <QuantityInputStyle>
        <OperatorDiv onClick={() => clickHandler("decrement")}>
          <MinusIcon />
        </OperatorDiv>
        <animated.span style={animateProps}>{quantity}</animated.span>
        <OperatorDiv onClick={() => clickHandler("increment")}>
          <PlusIcon />
        </OperatorDiv>
      </QuantityInputStyle>
    </>
  );
});
