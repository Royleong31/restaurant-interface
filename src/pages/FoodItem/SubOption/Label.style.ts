import styled from "styled-components";

export const LabelStyle = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0rem;
  min-height: 4rem;
  width: 92.3077%;
  margin: auto;

  &:not(:last-child) {
    border-bottom: solid 1px #f0f0f0;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  input {
    cursor: pointer;
    display: block;
    margin: 0;
  }

  p {
    font-size: 0.8125rem;
    color: #666666;
    line-height: 1.125rem;
    white-space: pre-line;
    width: 16rem;
    margin: 0;
    user-select: none;
  }
  span {
    font-size: 0.8125rem;
    color: #666666;
    align-self: center;
  }
`;
