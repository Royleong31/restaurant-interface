import React from "react";
import { animated, useSpring } from "react-spring";
import { animateOptions } from "./QuantityInput.style";

type Props = {
  quantity: number;
};

//create this component to use memo, so number won't jump on every rerender, only on quantity change.
export default React.memo(function QuantityIcon({ quantity }: Props) {
  const animateProps = useSpring(animateOptions);
  return <animated.span style={animateProps}>{quantity}</animated.span>;
});
