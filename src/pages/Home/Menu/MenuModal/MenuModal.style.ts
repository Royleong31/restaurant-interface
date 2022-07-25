import styled from "styled-components";

export const MenuModalStyle = styled.div`
  position: absolute;
  border-radius: 0.5rem 0.5rem 0 0;
  bottom: 0;
  background-color: white;
  min-height: 40vh;
  max-height: 80vh;
  width: 100vw;
  z-index: 1;

  ul {
    padding: 0;
    margin: 0;
    margin-top: 1.25rem;
    height: fit-content;
    max-height: 70vh;
    overflow: hidden;
    overflow-y: scroll;
  }
`;
