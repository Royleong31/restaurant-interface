import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  text-decoration: none;

  img {
    display: block;
    border-radius: 0.4375rem;
  }

  h5 {
    font-weight: 400;
    font-size: 1rem;
    color: #111b24;
    margin: 0;
    &:first-child {
      margin: 0 0 0.25rem 0;
    }
  }
`;
