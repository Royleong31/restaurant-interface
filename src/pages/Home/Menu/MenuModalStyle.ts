import styled from "styled-components";

export const MenuModalStyle = styled.div`
  position: absolute;
  border-radius: 0.5rem 0.5rem 0 0;
  bottom: 0;
  background-color: white;
  min-height: 40vh;
  max-height: 80vh;
  width: 100vw;

  ul {
    padding: 0;
    margin: 0;
    margin-top: 1.25rem;
    height: fit-content;
    max-height: 70vh;
    overflow: hidden;
    overflow-y: scroll;
  }

  .handle {
    width: 2.625rem;
    height: 0.25rem;
    margin: auto;
    margin-top: 0.5625rem;
    border-radius: 1rem;
    background-color: #e8e8e8;
  }
`;
