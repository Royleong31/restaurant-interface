import styled from "styled-components";

export const SearchBoxStyle = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 2;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.9375rem;
  border-radius: 3.125rem;
  background-color: #f5f6fa;
  height: inherit;
  cursor: text;
`;

export const InputStyled = styled.input`
  border: none;
  background-color: #f5f6fa;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  padding: 0;
  width: 4rem;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: black;
    padding: none;
    margin: none;
  }
`;
