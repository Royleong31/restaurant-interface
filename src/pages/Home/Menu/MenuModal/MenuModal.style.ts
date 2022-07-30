import styled from "styled-components";

export const MenuModalStyle = styled.div`
  position: fixed;
  border-radius: 0.5rem 0.5rem 0 0;
  bottom: 0;
  background-color: white;
  min-height: 50vh;
  max-height: 80vh;
  width: 100vw;
  z-index: 20;
  animation: fly-up cubic-bezier(0.18, 0.99, 0.74, 1) 0.3s;

  @keyframes fly-up {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  ul {
    padding: 0;
    margin: 0;
    margin-top: 1.25rem;
    height: fit-content;
    max-height: 70vh;
    overflow: hidden;
    overflow-y: scroll;
  }
  .activeCategory {
    color: #1c6dc9;
  }
`;
