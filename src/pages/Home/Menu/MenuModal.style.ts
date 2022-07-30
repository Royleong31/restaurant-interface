import styled from "styled-components";
import { animated } from "react-spring";

export const MenuModalStyle = styled(animated.div)`
  position: fixed;
  border-radius: 0.5rem 0.5rem 0 0;
  bottom: -5rem;
  background-color: white;
  min-height: calc(50vh + 5rem);
  max-height: calc(80vh + 5rem);
  width: 100vw;
  z-index: 20;
  ul {
    padding: 0;
    margin: 0;
    margin-top: 1.25rem;
    height: fit-content;
    max-height: 70vh;
  }
  .activeCategory {
    color: #1c6dc9;
  }
`;
