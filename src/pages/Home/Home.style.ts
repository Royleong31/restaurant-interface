import styled from "styled-components";

type Props = {
  menuOpen: boolean;
};

export const HomeStyle = styled.div<Props>`
  overflow-y: ${(props) => (props.menuOpen ? "hidden" : "visible")};
  height: ${(props) => (props.menuOpen ? "100vh" : "auto")};

  //css here to prevent scrolling when menu modal is open.
  //BUG: Page auto scroll back to top when menu modal is opened.
`;
