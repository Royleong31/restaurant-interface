import styled from "styled-components";

export const HeaderStyle = styled.header`
  margin: 0;
  padding: 0;
  height: 11.5rem;
  svg {
    position: absolute;
    top: 2.5625rem;
    left: 1.125rem;
    &:hover {
      filter: brightness(2);
    }
  }
  img {
    min-width: 100%;
    height: 11.5rem;
    object-fit: cover;
  }
`;
