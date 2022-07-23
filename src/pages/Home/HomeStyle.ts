import styled from "styled-components";

type Props = {
  menuOpen: boolean;
};

export const HomeStyle = styled.div<Props>`
  overflow-y: ${(props) => (props.menuOpen ? "hidden" : "auto")};
  height: ${(props) => (props.menuOpen ? "100vh" : "auto")};
`;
