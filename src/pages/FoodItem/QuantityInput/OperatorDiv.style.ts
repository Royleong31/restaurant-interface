import styled from "styled-components";

type Props = {
  $disabled: boolean;
};

export const OperatorDiv = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  border: solid 0.0625rem #f4f4f4;

  &:hover {
    cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
    filter: ${(props) =>
      props.$disabled ? "brightness(1)" : "brightness(0.95)"};
  }
  &:active {
    filter: ${(props) =>
      props.$disabled ? "brightness(1)" : "brightness(0.9)"};
  }
`;
