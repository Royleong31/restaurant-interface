import styled from "styled-components";

export const OperatorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  border: solid 0.0625rem #f4f4f4;

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
  &:active {
    filter: brightness(0.9);
  }
`;
