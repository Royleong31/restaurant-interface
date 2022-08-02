import styled from "styled-components";
import { boolean } from "yup";

interface Props {
  $active: boolean;
}

export const CategoryLiStyle = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  width: 91.3%;
  height: 3.6875rem;
  margin: auto;
  border-bottom: 0.0625rem solid #e8e8e8;
  color: ${(Props) => (Props.$active ? "#1c6dc9" : "#000")};
  &:last-child {
    border-bottom: unset;
    margin-bottom: 1.25rem;
  }
`;
