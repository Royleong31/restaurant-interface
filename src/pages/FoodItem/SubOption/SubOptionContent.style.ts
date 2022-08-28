import styled from "styled-components";

export const SubOptionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

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
`;
