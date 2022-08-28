import styled from "styled-components";

type Props = {
  $showBorderBottom: boolean;
};

export const SummaryStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) =>
    props.$showBorderBottom ? "0.5rem solid #f7f7f7" : "none"};
`;
