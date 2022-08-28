import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import { ValidIcon, InvalidIcon } from "assets/svgs";

export const OptionStyle = styled.div`
  position: relative;
  border-bottom: solid 0.5rem #f7f7f7;
  &:last-child {
    border-bottom: unset;
  }

  svg {
    display: inline;
    position: absolute;
    right: 0.9375rem;
    top: 0.9375rem;
  }
`;

export const AnimatedValidIcon = animated(ValidIcon);
export const AnimatedInvalidIcon = animated(InvalidIcon);
export const transitionOptions = {
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
