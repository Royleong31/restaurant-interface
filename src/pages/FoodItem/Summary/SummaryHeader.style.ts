import styled from "styled-components";

export const SummaryHeaderStyle = styled.div`
  padding: 1rem 1rem 0.5rem;
  display: flex;
  justify-content: space-between;

  h1,
  h2,
  p {
    margin: 0;
  }

  h1,
  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #000;
  }

  h1 {
    width: 75%;
    line-height: 1.7rem;
  }

  h2 {
    font-variant: small-caps;
    text-transform: lowercase;
    text-align: right;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.6875rem;
    font-weight: 400;
    color: #666666;
    text-align: right;
  }
`;
