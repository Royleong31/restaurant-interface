import styled from "styled-components";

export const OptionHeaderStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.6875rem 3rem 0.1875rem 0.9375rem;
  column-gap: 0.75rem;
  row-gap: 0.2rem;
  h1 {
    display: inline-block;
    font-size: 1rem;
    margin: 0;
    align-self: baseline;
    line-height: 1.5rem;
    /* margin: 0.6875rem 0 0.1875rem; */
  }
  p {
    display: inline-block;
    font-size: 0.6875rem;
    color: #9f9f9f;
    margin: 0;
    align-self: baseline;
    /* margin: 0.6875rem 0 0.1875rem 0.75rem; */
  }
`;
