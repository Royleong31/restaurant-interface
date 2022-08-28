import styled from "styled-components";

type Props = {
  $disabled?: boolean;
  $src: string;
};

export const OperatorButton = styled.input<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  border: solid 0.0625rem #f4f4f4;
  background-image: url(${(props) => props.$src});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: ${(props) =>
    props.$disabled ? "opacity(0.5) grayscale(1)" : "none"};

  &:hover {
    cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
    filter: ${(props) =>
      props.$disabled ? "opacity(0.5) grayscale(1)" : "brightness(0.95)"};
  }
  &:active {
    filter: ${(props) =>
      props.$disabled ? "opacity(0.5) grayscale(1)" : "brightness(0.9)"};
  }
`;

export const animateOptions = {
  from: { transform: "translateY(-0.3rem)", opacity: 0.8 },
  to: { transform: "translateY(0)", opacity: 1 },
  reset: true,
  config: {
    mass: 0.1,
    tension: 52,
    friction: 2,
    velocity: 0.016,
  },
};
