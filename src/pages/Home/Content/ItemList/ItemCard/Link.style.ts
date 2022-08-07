import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: flex;
  width: 10.5625rem;
  flex-direction: column;
  gap: 0.625rem;
  text-decoration: none;

  img {
    display: block;
    object-fit: cover;
    border-radius: 0.4375rem;
    width: 10.5625rem;
    aspect-ratio: 1;
  }

  h5 {
    font-weight: 500;
    font-size: 1rem;
    color: #111b24;
    margin: 0;
    &:first-child {
      margin: 0 0 0.25rem 0;
    }
  }
`;
